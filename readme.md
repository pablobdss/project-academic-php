# Barber Appointment System

## Description

This project aims to create a system for managing appointments at a barbershop. It allows users to schedule haircut and beard trimming appointments, view their appointments, and manage them accordingly.

## Features

- **Appointment Scheduling**: Users can schedule appointments for haircuts and beard trimming.
- **View Appointments**: Users can view their scheduled appointments.
- **Edit and Cancel Appointments**: Users can modify or cancel existing appointments.
- **Authentication**: Login and registration functionality for users.

## Database (MySQL) Configuration

### English

To set up the MySQL database using XAMPP:

1. **Install XAMPP**: Download and install XAMPP from [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html).
2. **Start Apache and MySQL**: Open XAMPP and start both Apache and MySQL services.
3. **Access phpMyAdmin**: Go to `http://localhost/phpmyadmin` in your web browser.
4. **Create Database**: Create a new database named `barber_shop` or any preferred name.
5. **Import Schema**: Import the provided SQL file (`schema.sql`) into the created database to set up the necessary tables.

### Portuguese

Para configurar o banco de dados MySQL utilizando o XAMPP:

1. **Instale o XAMPP**: Baixe e instale o XAMPP em [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html).
2. **Inicie o Apache e o MySQL**: Abra o XAMPP e inicie os serviços do Apache e do MySQL.
3. **Acesse o phpMyAdmin**: Vá para `http://localhost/phpmyadmin` no seu navegador.
4. **Crie o Banco de Dados**: Crie um novo banco de dados chamado `barber_shop` ou outro nome desejado.
5. **Importe o Esquema**: Importe o arquivo SQL fornecido (`schema.sql`) para o banco de dados criado para configurar as tabelas necessárias.

These instructions will help users set up the MySQL database using XAMPP for your barber appointment system.

## Database Setup

The SQL file to set up the database is included in the `database` folder of this project.

To configure the database:
1. Navigate to the `database` folder.
2. Use a database management system (e.g., phpMyAdmin) to import the SQL file [db_studio.sql](SQL/db_studio.sql) into your database.
3. Configure the database connection settings in the [db_conn.php](php/db_conn.php) file.

## Configuração do Banco de Dados

O arquivo SQL para configurar o banco de dados está incluído na pasta `database` deste projeto.

Para configurar o banco de dados:
1. Navegue até a pasta `database`.
2. Utilize um sistema de gerenciamento de banco de dados (ex: phpMyAdmin) para importar o arquivo SQL [db_studio.sql](SQL/db_studio.sql) para o seu banco de dados.
3. Configure as informações de conexão com o banco de dados no arquivo [db_conn.php](php/db_conn.php).

Certifique-se de executar essas etapas para garantir que o banco de dados esteja configurado corretamente antes de usar o projeto.


## Contributing

We welcome contributions to improve the Barber Appointment System. If you'd like to contribute, please follow these guidelines:

- Report any issues or bugs by creating a detailed GitHub issue.
- Suggest new features or improvements by opening an enhancement request issue.
- Fork the repository, create a new branch, and make your modifications.
- Ensure your code follows our coding standards and is well-documented.
- Create a pull request with a clear description of your changes for review.

## Contributors

- [Juan Pablo](https://github.com/pablobdss)
- [Fábio Rangel ](https://github.com/fabiords07)


