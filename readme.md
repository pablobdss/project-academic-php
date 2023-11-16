# Barber Appointment System

## Description

This project aims to create a system for managing appointments at a barbershop. It allows users to schedule haircut and beard trimming appointments, view their appointments, and manage them accordingly.

## Features

- **Appointment Scheduling**: Users can schedule appointments for haircuts and beard trimming.
- **View Appointments**: Users can view their scheduled appointments.
- **Edit and Cancel Appointments**: Users can modify or cancel existing appointments. (The edit functionality is still under development.)
- **Authentication**: Login and registration functionality for users.

## Database (MySQL) Configuration

1. **Install XAMPP**: Download and install XAMPP from [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html).
2. **Start Apache and MySQL**: Open XAMPP and start both Apache and MySQL services.
3. **Access phpMyAdmin**: Go to `http://localhost/phpmyadmin` in your web browser.
4. **Create Database**: Create a new database named `barber_shop` or any preferred name.
5. **Import Schema**: Import the provided SQL file (`schema.sql`) into the created database to set up the necessary tables.

The SQL file to set up the database is included in the `database` folder of this project.

To configure the database:
1. Navigate to the `database` folder.
2. Use a database management system (e.g., phpMyAdmin) to import the SQL file [db_studio.sql](SQL/db_studio.sql) into your database.
3. Configure the database connection settings in the [db_conn.php](php/db_conn.php) file.

Make sure to perform these steps to ensure the database is properly configured before using the project

## Under Development

We're continuously enhancing the Project to handle exceptional cases such as previously scheduled dates and times, users with the same email, among others. We are actively working on refining these aspects to ensure a more robust system.

We are still in the process of improving the system to address all exceptional cases, aiming to deliver a consistent user experience.

## Contributing

We welcome contributions to improve the Barber Appointment System. If you'd like to contribute, please follow these guidelines:

- Report any issues or bugs by creating a detailed GitHub issue.
- Suggest new features or improvements by opening an enhancement request issue.
- Fork the repository, create a new branch, and make your modifications.
- Ensure your code follows our coding standards and is well-documented.
- Create a pull request with a clear description of your changes for review.

One of the objectives that we pursued in this project was to maintain each file separate. Therefore, we won't have PHP and HTML mixed.

## Contributors

- [Juan Pablo](https://github.com/pablobdss) - Back-End
- [Fábio Rangel ](https://github.com/fabiords07) - Front-End

# Sistema de Agendamento de Barbearia

## Descrição

Este projeto tem como objetivo criar um sistema para gerenciar agendamentos em uma barbearia. Permite que os usuários agendem cortes de cabelo, aparos de barba, visualizem seus agendamentos e os gerenciem de acordo com suas necessidades.

## Recursos

- **Agendamento de Compromissos**: Os usuários podem agendar compromissos para cortes de cabelo e aparos de barba.
- **Visualizar Agendamentos**: Os usuários podem ver seus agendamentos.
- **Editar e Cancelar Agendamentos**: Os usuários podem modificar ou cancelar agendamentos existentes. (A funcionalidade editar ainda está em desenvolvimento)
- **Autenticação**: Funcionalidade de login e registro para usuários.

## Configuração do Banco de Dados (MySQL)

1. **Instale o XAMPP**: Baixe e instale o XAMPP em [https://www.apachefriends.org/index.html](https://www.apachefriends.org/index.html).
2. **Inicie o Apache e o MySQL**: Abra o XAMPP e inicie os serviços do Apache e do MySQL.
3. **Acesse o phpMyAdmin**: Vá para `http://localhost/phpmyadmin` no seu navegador.
4. **Crie o Banco de Dados**: Crie um novo banco de dados chamado `barber_shop` ou outro nome desejado.
5. **Importe o Esquema**: Importe o arquivo SQL fornecido (`schema.sql`) para o banco de dados criado para configurar as tabelas necessárias.

O arquivo SQL para configurar o banco de dados está incluído na pasta `database` deste projeto.

Para configurar o banco de dados:
1. Navegue até a pasta `database`.
2. Utilize um sistema de gerenciamento de banco de dados (ex: phpMyAdmin) para importar o arquivo SQL [db_studio.sql](SQL/db_studio.sql) para o seu banco de dados.
3. Configure as informações de conexão com o banco de dados no arquivo [db_conn.php](php/db_conn.php).

Certifique-se de executar essas etapas para garantir que o banco de dados esteja configurado corretamente antes de usar o projeto.

## Em Desenvolvimento

Estamos continuamente aprimorando o Projeto para lidar com casos excepcionais, como datas e horários já agendados, usuários com o mesmo e-mail, entre outros. Estamos trabalhando ativamente para aprimorar esses aspectos, visando um sistema mais robusto.

Ainda estamos no processo de melhoria do sistema para lidar com todos os casos excepcionais, com o objetivo de oferecer uma experiência de usuário consistente.

## Contribuições

Aceitamos contribuições para melhorar o Sistema de Agendamento de Barbearia. Se você deseja contribuir, siga estas diretrizes:

- Relate quaisquer problemas ou bugs criando uma issue detalhada no GitHub.
- Sugira novos recursos ou melhorias abrindo uma issue de solicitação de melhoria.
- Faça um fork do repositório, crie um novo branch e faça suas modificações.
- Certifique-se de que seu código siga nossos padrões de codificação e esteja bem documentado.
- Crie um pull request com uma descrição clara das suas alterações para revisão.

Um dos objetivos que nós buscamos neste projeto foi manter cada arquivo separado. Por isso, não teremos PHP e HTML misturados.

## Contribuidores

- [Juan Pablo](https://github.com/pablobdss) - Back-End
- [Fábio Rangel ](https://github.com/fabiords07) - Front-End
