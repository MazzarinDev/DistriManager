#!/usr/bin/env python3
"""
DistriManager - Sistema de Planejamento de Construção
Desenvolvido por: MazzarinDev
Período: Outubro 2025
Horas de Desenvolvimento: 70 horas
"""

import sys
import json
from datetime import datetime, timedelta
from PyQt5.QtWidgets import (QApplication, QMainWindow, QWidget, QVBoxLayout, 
                             QHBoxLayout, QPushButton, QLabel, QScrollArea,
                             QDialog, QLineEdit, QTextEdit, QDateEdit, 
                             QComboBox, QMessageBox, QFrame, QGridLayout)
from PyQt5.QtCore import Qt, QDate, QTimer
from PyQt5.QtGui import QFont, QPalette, QColor


class TaskCard(QFrame):
    """Cartão de tarefa estilo Trello"""
    
    def __init__(self, task_data, parent_column, main_window):
        super().__init__()
        self.task_data = task_data
        self.parent_column = parent_column
        self.main_window = main_window
        self.setup_ui()
        
    def setup_ui(self):
        self.setFrameStyle(QFrame.Box | QFrame.Raised)
        self.setLineWidth(2)
        self.setStyleSheet("""
            TaskCard {
                background-color: white;
                border: 2px solid #ddd;
                border-radius: 8px;
                padding: 10px;
                margin: 5px;
            }
            TaskCard:hover {
                border-color: #0079bf;
                background-color: #f4f5f7;
            }
        """)
        
        layout = QVBoxLayout()
        
        # Título da tarefa
        title_label = QLabel(self.task_data['title'])
        title_font = QFont()
        title_font.setBold(True)
        title_font.setPointSize(11)
        title_label.setFont(title_font)
        title_label.setWordWrap(True)
        layout.addWidget(title_label)
        
        # Descrição
        if self.task_data.get('description'):
            desc_label = QLabel(self.task_data['description'][:100] + '...' 
                               if len(self.task_data['description']) > 100 
                               else self.task_data['description'])
            desc_label.setWordWrap(True)
            desc_label.setStyleSheet("color: #5e6c84; font-size: 10px;")
            layout.addWidget(desc_label)
        
        # Data de entrega
        due_date = QLabel(f"📅 Entrega: {self.task_data['due_date']}")
        due_date.setStyleSheet("color: #172b4d; font-weight: bold; font-size: 10px;")
        layout.addWidget(due_date)
        
        # Responsável
        if self.task_data.get('assignee'):
            assignee = QLabel(f"👤 {self.task_data['assignee']}")
            assignee.setStyleSheet("color: #5e6c84; font-size: 10px;")
            layout.addWidget(assignee)
        
        # Prioridade
        priority_colors = {
            'Alta': '#eb5a46',
            'Média': '#f2d600',
            'Baixa': '#61bd4f'
        }
        priority = self.task_data.get('priority', 'Média')
        priority_label = QLabel(f"⚡ {priority}")
        priority_label.setStyleSheet(f"""
            background-color: {priority_colors.get(priority, '#61bd4f')};
            color: white;
            padding: 3px 8px;
            border-radius: 3px;
            font-size: 9px;
            font-weight: bold;
        """)
        layout.addWidget(priority_label)
        
        # Botões de ação
        btn_layout = QHBoxLayout()
        
        edit_btn = QPushButton("✏️ Editar")
        edit_btn.setStyleSheet("""
            QPushButton {
                background-color: #0079bf;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 9px;
            }
            QPushButton:hover {
                background-color: #026aa7;
            }
        """)
        edit_btn.clicked.connect(self.edit_task)
        btn_layout.addWidget(edit_btn)
        
        delete_btn = QPushButton("🗑️")
        delete_btn.setStyleSheet("""
            QPushButton {
                background-color: #eb5a46;
                color: white;
                border: none;
                padding: 5px 10px;
                border-radius: 3px;
                font-size: 9px;
            }
            QPushButton:hover {
                background-color: #cf513d;
            }
        """)
        delete_btn.clicked.connect(self.delete_task)
        btn_layout.addWidget(delete_btn)
        
        layout.addLayout(btn_layout)
        
        self.setLayout(layout)
        self.setMaximumWidth(280)
        self.setMinimumWidth(250)
        
    def edit_task(self):
        dialog = TaskDialog(self.main_window, self.task_data)
        if dialog.exec_():
            updated_data = dialog.get_task_data()
            self.task_data.update(updated_data)
            self.main_window.save_data()
            self.main_window.refresh_board()
            
    def delete_task(self):
        reply = QMessageBox.question(self, 'Confirmar Exclusão',
                                    'Deseja realmente excluir esta tarefa?',
                                    QMessageBox.Yes | QMessageBox.No)
        if reply == QMessageBox.Yes:
            self.parent_column.tasks.remove(self.task_data)
            self.main_window.save_data()
            self.main_window.refresh_board()


class ColumnWidget(QFrame):
    """Coluna estilo Trello para agrupar tarefas"""
    
    def __init__(self, column_name, tasks, main_window):
        super().__init__()
        self.column_name = column_name
        self.tasks = tasks
        self.main_window = main_window
        self.setup_ui()
        
    def setup_ui(self):
        self.setFrameStyle(QFrame.Box)
        self.setStyleSheet("""
            ColumnWidget {
                background-color: #ebecf0;
                border-radius: 10px;
                padding: 10px;
            }
        """)
        
        layout = QVBoxLayout()
        
        # Cabeçalho da coluna
        header = QLabel(f"{self.column_name} ({len(self.tasks)})")
        header_font = QFont()
        header_font.setBold(True)
        header_font.setPointSize(12)
        header.setFont(header_font)
        header.setStyleSheet("color: #172b4d; padding: 5px;")
        layout.addWidget(header)
        
        # Área de scroll para os cartões
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll.setStyleSheet("""
            QScrollArea {
                border: none;
                background-color: transparent;
            }
        """)
        
        # Container para os cartões
        cards_container = QWidget()
        cards_layout = QVBoxLayout()
        cards_layout.setAlignment(Qt.AlignTop)
        
        # Adicionar cartões de tarefas
        for task in self.tasks:
            card = TaskCard(task, self, self.main_window)
            cards_layout.addWidget(card)
        
        cards_container.setLayout(cards_layout)
        scroll.setWidget(cards_container)
        layout.addWidget(scroll)
        
        # Botão para adicionar nova tarefa
        add_btn = QPushButton("+ Adicionar Tarefa")
        add_btn.setStyleSheet("""
            QPushButton {
                background-color: #091e420a;
                border: none;
                padding: 8px;
                border-radius: 3px;
                color: #172b4d;
                text-align: left;
            }
            QPushButton:hover {
                background-color: #091e4214;
            }
        """)
        add_btn.clicked.connect(lambda: self.add_task())
        layout.addWidget(add_btn)
        
        self.setLayout(layout)
        self.setMinimumWidth(300)
        self.setMaximumWidth(320)
        
    def add_task(self):
        dialog = TaskDialog(self.main_window, status=self.column_name)
        if dialog.exec_():
            new_task = dialog.get_task_data()
            self.tasks.append(new_task)
            self.main_window.save_data()
            self.main_window.refresh_board()


class TaskDialog(QDialog):
    """Diálogo para criar/editar tarefas"""
    
    def __init__(self, parent, task_data=None, status=None):
        super().__init__(parent)
        self.task_data = task_data or {}
        self.default_status = status
        self.setup_ui()
        
    def setup_ui(self):
        self.setWindowTitle("Nova Tarefa" if not self.task_data else "Editar Tarefa")
        self.setModal(True)
        self.setMinimumWidth(500)
        
        layout = QVBoxLayout()
        
        # Título
        layout.addWidget(QLabel("Título da Tarefa:"))
        self.title_input = QLineEdit()
        self.title_input.setText(self.task_data.get('title', ''))
        self.title_input.setPlaceholderText("Ex: Implementar módulo de vendas")
        layout.addWidget(self.title_input)
        
        # Descrição
        layout.addWidget(QLabel("Descrição:"))
        self.desc_input = QTextEdit()
        self.desc_input.setText(self.task_data.get('description', ''))
        self.desc_input.setPlaceholderText("Descreva os detalhes da tarefa...")
        self.desc_input.setMaximumHeight(100)
        layout.addWidget(self.desc_input)
        
        # Data de entrega
        layout.addWidget(QLabel("Data de Entrega:"))
        self.date_input = QDateEdit()
        self.date_input.setCalendarPopup(True)
        if self.task_data.get('due_date'):
            date_parts = self.task_data['due_date'].split('/')
            self.date_input.setDate(QDate(int(date_parts[2]), int(date_parts[1]), int(date_parts[0])))
        else:
            self.date_input.setDate(QDate.currentDate().addDays(7))
        layout.addWidget(self.date_input)
        
        # Responsável
        layout.addWidget(QLabel("Responsável:"))
        self.assignee_input = QLineEdit()
        self.assignee_input.setText(self.task_data.get('assignee', ''))
        self.assignee_input.setPlaceholderText("Nome do desenvolvedor")
        layout.addWidget(self.assignee_input)
        
        # Prioridade
        layout.addWidget(QLabel("Prioridade:"))
        self.priority_input = QComboBox()
        self.priority_input.addItems(['Baixa', 'Média', 'Alta'])
        current_priority = self.task_data.get('priority', 'Média')
        self.priority_input.setCurrentText(current_priority)
        layout.addWidget(self.priority_input)
        
        # Status
        layout.addWidget(QLabel("Status:"))
        self.status_input = QComboBox()
        self.status_input.addItems(['Backlog', 'Em Progresso', 'Em Revisão', 'Concluído'])
        current_status = self.task_data.get('status', self.default_status or 'Backlog')
        self.status_input.setCurrentText(current_status)
        layout.addWidget(self.status_input)
        
        # Botões
        btn_layout = QHBoxLayout()
        
        save_btn = QPushButton("💾 Salvar")
        save_btn.setStyleSheet("""
            QPushButton {
                background-color: #5aac44;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 3px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #519839;
            }
        """)
        save_btn.clicked.connect(self.accept)
        btn_layout.addWidget(save_btn)
        
        cancel_btn = QPushButton("❌ Cancelar")
        cancel_btn.setStyleSheet("""
            QPushButton {
                background-color: #b3bac5;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 3px;
            }
            QPushButton:hover {
                background-color: #a5adba;
            }
        """)
        cancel_btn.clicked.connect(self.reject)
        btn_layout.addWidget(cancel_btn)
        
        layout.addLayout(btn_layout)
        
        self.setLayout(layout)
        
    def get_task_data(self):
        date = self.date_input.date()
        return {
            'title': self.title_input.text(),
            'description': self.desc_input.toPlainText(),
            'due_date': f"{date.day():02d}/{date.month():02d}/{date.year()}",
            'assignee': self.assignee_input.text(),
            'priority': self.priority_input.currentText(),
            'status': self.status_input.currentText()
        }


class DistriManager(QMainWindow):
    """Janela principal do DistriManager"""
    
    def __init__(self):
        super().__init__()
        self.data_file = '/home/ubuntu/distrimanager/data.json'
        self.tasks = self.load_data()
        self.dark_mode = False
        self.setup_ui()
        self.apply_theme()
        
    def setup_ui(self):
        self.setWindowTitle("DistriManager - Sistema de Planejamento de Construção")
        self.setGeometry(100, 100, 1400, 800)
        
        # Widget central
        central_widget = QWidget()
        self.setCentralWidget(central_widget)
        
        main_layout = QVBoxLayout()
        
        # Barra de título
        title_bar = QFrame()
        title_bar.setStyleSheet("""
            QFrame {
                background-color: #0079bf;
                padding: 15px;
            }
        """)
        title_layout = QHBoxLayout()
        
        title = QLabel("📊 DistriManager")
        title_font = QFont()
        title_font.setPointSize(18)
        title_font.setBold(True)
        title.setFont(title_font)
        title.setStyleSheet("color: white;")
        title_layout.addWidget(title)
        
        subtitle = QLabel("Sistema de Planejamento de Construção | Desenvolvido por MazzarinDev")
        subtitle.setStyleSheet("color: #e6f2ff; font-size: 11px;")
        title_layout.addWidget(subtitle)
        
        title_layout.addStretch()
        
        # Botão de relatório
        report_btn = QPushButton("📈 Gerar Relatório")
        report_btn.setStyleSheet("""
            QPushButton {
                background-color: #5aac44;
                color: white;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                font-weight: bold;
            }
            QPushButton:hover {
                background-color: #519839;
            }
        """)
        report_btn.clicked.connect(self.generate_report)
        title_layout.addWidget(report_btn)

        # Botão de tema
        self.theme_btn = QPushButton("🌙")
        self.theme_btn.setFixedSize(40, 40)
        self.theme_btn.setStyleSheet("""
            QPushButton {
                background-color: rgba(255, 255, 255, 0.2);
                color: white;
                border: none;
                border-radius: 20px;
                font-size: 16px;
            }
            QPushButton:hover {
                background-color: rgba(255, 255, 255, 0.3);
            }
        """)
        self.theme_btn.clicked.connect(self.toggle_theme)
        title_layout.addWidget(self.theme_btn)
        
        title_bar.setLayout(title_layout)
        main_layout.addWidget(title_bar)
        
        # Área do board (colunas)
        board_scroll = QScrollArea()
        board_scroll.setWidgetResizable(True)
        board_scroll.setStyleSheet("""
            QScrollArea {
                background-color: #0079bf;
                border: none;
            }
        """)
        
        self.board_widget = QWidget()
        self.board_layout = QHBoxLayout()
        self.board_layout.setAlignment(Qt.AlignLeft)
        
        self.refresh_board()
        
        self.board_widget.setLayout(self.board_layout)
        board_scroll.setWidget(self.board_widget)
        main_layout.addWidget(board_scroll)
        
        central_widget.setLayout(main_layout)
        
    def refresh_board(self):
        # Limpar layout atual
        while self.board_layout.count():
            item = self.board_layout.takeAt(0)
            if item.widget():
                item.widget().deleteLater()
        
        # Organizar tarefas por status
        columns = {
            'Backlog': [],
            'Em Progresso': [],
            'Em Revisão': [],
            'Concluído': []
        }
        
        for task in self.tasks:
            status = task.get('status', 'Backlog')
            if status in columns:
                columns[status].append(task)
        
        # Criar colunas
        for column_name, tasks in columns.items():
            column = ColumnWidget(column_name, tasks, self)
            self.board_layout.addWidget(column)
        
        self.board_layout.addStretch()
        
    def load_data(self):
        try:
            with open(self.data_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            # Dados de exemplo
            return [
                {
                    'title': 'Configurar ambiente de desenvolvimento',
                    'description': 'Instalar Python, PyQt5 e configurar IDE',
                    'due_date': '05/10/2025',
                    'assignee': 'MazzarinDev',
                    'priority': 'Alta',
                    'status': 'Concluído'
                },
                {
                    'title': 'Desenvolver interface principal',
                    'description': 'Criar janela principal com layout estilo Trello',
                    'due_date': '12/10/2025',
                    'assignee': 'MazzarinDev',
                    'priority': 'Alta',
                    'status': 'Concluído'
                },
                {
                    'title': 'Implementar sistema de tarefas',
                    'description': 'Criar, editar e excluir tarefas com datas fixas',
                    'due_date': '18/10/2025',
                    'assignee': 'MazzarinDev',
                    'priority': 'Alta',
                    'status': 'Em Revisão'
                },
                {
                    'title': 'Adicionar persistência de dados',
                    'description': 'Salvar e carregar tarefas em arquivo JSON',
                    'due_date': '22/10/2025',
                    'assignee': 'MazzarinDev',
                    'priority': 'Média',
                    'status': 'Em Progresso'
                },
                {
                    'title': 'Implementar sistema de relatórios',
                    'description': 'Gerar relatórios de progresso e horas trabalhadas',
                    'due_date': '28/10/2025',
                    'assignee': 'MazzarinDev',
                    'priority': 'Média',
                    'status': 'Backlog'
                }
            ]
    
    def save_data(self):
        with open(self.data_file, 'w', encoding='utf-8') as f:
            json.dump(self.tasks, f, ensure_ascii=False, indent=2)
    
    def generate_report(self):
        QMessageBox.information(self, "Relatório", 
                               f"Total de tarefas: {len(self.tasks)}\n"
                               f"Concluídas: {len([t for t in self.tasks if t['status'] == 'Concluído'])}\n"
                               f"Em andamento: {len([t for t in self.tasks if t['status'] in ['Em Progresso', 'Em Revisão']])}\n"
                               f"Pendentes: {len([t for t in self.tasks if t['status'] == 'Backlog'])}")

    def toggle_theme(self):
        self.dark_mode = not self.dark_mode
        self.apply_theme()
        self.theme_btn.setText("☀️" if self.dark_mode else "🌙")

    def apply_theme(self):
        if self.dark_mode:
            # Dark Theme
            self.setStyleSheet("""
                QMainWindow { background-color: #1e1e1e; }
                QLabel { color: #e0e0e0; }
                QScrollArea { background-color: #1e1e1e; border: none; }
                ColumnWidget { background-color: #2d2d2d; border: 1px solid #3e3e3e; }
                TaskCard { background-color: #333333; border: 1px solid #444; color: #e0e0e0; }
                TaskCard:hover { border-color: #0079bf; background-color: #3a3a3a; }
                QDialog { background-color: #2d2d2d; color: #e0e0e0; }
                QLineEdit, QTextEdit, QDateEdit, QComboBox { 
                    background-color: #333; 
                    color: #e0e0e0; 
                    border: 1px solid #555; 
                    padding: 5px;
                }
            """)
            # Atualizar cores específicas dos widgets
            for column in self.findChildren(ColumnWidget):
                column.setStyleSheet("""
                    ColumnWidget {
                        background-color: #2d2d2d;
                        border-radius: 10px;
                        padding: 10px;
                        border: 1px solid #3e3e3e;
                    }
                """)
                column.findChild(QLabel).setStyleSheet("color: #e0e0e0; padding: 5px; font-weight: bold;")
                column.findChild(QPushButton).setStyleSheet("""
                    QPushButton {
                        background-color: #ffffff10;
                        border: none;
                        padding: 8px;
                        border-radius: 3px;
                        color: #e0e0e0;
                        text-align: left;
                    }
                    QPushButton:hover {
                        background-color: #ffffff20;
                    }
                """)
        else:
            # Light Theme (Default)
            self.setStyleSheet("")
            for column in self.findChildren(ColumnWidget):
                column.setStyleSheet("""
                    ColumnWidget {
                        background-color: #ebecf0;
                        border-radius: 10px;
                        padding: 10px;
                    }
                """)
                column.findChild(QLabel).setStyleSheet("color: #172b4d; padding: 5px; font-weight: bold;")
                column.findChild(QPushButton).setStyleSheet("""
                    QPushButton {
                        background-color: #091e420a;
                        border: none;
                        padding: 8px;
                        border-radius: 3px;
                        color: #172b4d;
                        text-align: left;
                    }
                    QPushButton:hover {
                        background-color: #091e4214;
                    }
                """)
        
        # Forçar atualização visual
        self.refresh_board()


def main():
    app = QApplication(sys.argv)
    
    # Configurar estilo da aplicação
    app.setStyle('Fusion')
    
    window = DistriManager()
    window.show()
    
    sys.exit(app.exec_())


if __name__ == '__main__':
    main()
