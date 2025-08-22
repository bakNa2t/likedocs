export const templates = [
  [
    {
      id: "blank",
      label: "Blank document",
      imageUrl: "templates/blank-document.svg",
      initialContent: "",
    },
    {
      id: "blank-letter",
      label: "Letter",
      imageUrl: "templates/blank-letter.svg",
      initialContent: `
      <p>Subject: [Email Subject]</p>

      <p>Dear [Recipient],</p>

      <p>I hope this email finds you well.</p>

      <p>Best regards,<br>
      [Your Name]
      </p>
    `,
    },
    {
      id: "blank-cover-letter",
      label: "Cover letter",
      imageUrl: "templates/blank-cover-letter.svg",
      initialContent: `
      <p>[Your Name]<br>
      [Your Address]<br>
      [City, State, ZIP]<br>

      <p>[Date]</p>

      <p>[Recipient's Name]<br>
      [Company Name]<br>
      [Company Address]<br>

      <p>Dear [Recipient's Name],</p>

      <p>I am writing to express my interest in the [Position] at [Company Name].</p>

      <p>Sincerely,<br>
      [Your Name]
      </p>
    `,
    },
    {
      id: "blank-resume",
      label: "Resume",
      imageUrl: "templates/blank-resume.svg",
      initialContent: `
      <h1>[Your Name]</h1>
      <p>[Contact Information]</p>

      <h2>Professional Summary</h2>
      <p>
          Brief overview of your professional background and key strengths.
      </p>

      <h2>Work Experience</h2>
      <p>
          [Company Name] - [Position]<br>
          [Data Range] 
      </p>

      <h2>Education</h2>
      <p> [Degree] - [Institution]<br>
      [Graduation Year] </p>

      <h2>Skills</h2>
      <p>List of relevant skills and competencies.</p>
    `,
    },
    {
      id: "blank-bisuiness-letter",
      label: "Business letter",
      imageUrl: "templates/blank-business-letter.svg",
      initialContent: `
      <h1>Business Letter</h1>
      <p>This is a business letter template.</p>
    `,
    },
    {
      id: "blank-project-proposal",
      label: "Project proposal",
      imageUrl: "templates/blank-project-proposal.svg",
      initialContent: `
      <h1>Project Propsal</h1>
      <h2>Executive Summary</h2>
      <p>
          Brief overview of the project propsal.
      </p>

      <h2>Project Goals</h2>
      <p>
          Key objectives and expected outcomes.
      </p>

      <h2>Implementation Plan</h2>
      <p> Strategy and methodology for project execution. </p>

      <h2>Resources Required</h2>
      <p>Team, equipment, and budget requirements.</p>
    `,
    },
    {
      id: "blank-software-proposal",
      label: "Software development proposal",
      imageUrl: "templates/blank-software-proposal.svg",
      initialContent: `
      <h1>Software Development Propsal</h1>
      <h2>Project Overview</h2>
      <p>
          Brief description of the proposed seftware development project.
      </p>

      <h2>Scope of Work</h2>
      <p>
          Detailed breakdown of project deliverables and requirements.
      </p>

      <h2>Timeline</h2>
      <p> Project milestones and delivery schedule. </p>

      <h2>Budget</h2>
      <p>Cost breakdown and payment terms.</p>
    `,
    },
  ],
  [
    {
      id: "blank",
      label: "Пустой документ",
      imageUrl: "templates/blank-document.svg",
      initialContent: "",
    },
    {
      id: "blank-letter",
      label: "Письмо",
      imageUrl: "templates/blank-letter.svg",
      initialContent: `
      <p>Subject: [Тема письма]</p>

      <p>Уважаемый [Получатель],</p>

      <p>Надеюсь, этот письмо вам понравится.</p>

      <p>С уважением,<br>
      [Ваше имя]
      </p>
    `,
    },
    {
      id: "blank-cover-letter",
      label: "Сопроводительное письмо",
      imageUrl: "templates/blank-cover-letter.svg",
      initialContent: `
      <p>[Ваше имя]<br>
      [Ваш адрес]<br>
      [Город, Область, Почтовый индекс]<br>

      <p>[Дата]</p>

      <p>[Имя получателя]<br>
      [Имя компании]<br>
      [Адресс компании]<br>

      <p>Уважаемый [Имя получателя],</p>

      <p>Я пишу, чтобы выразить свою заинтересованность в [Должность] в [Название компании].</p>

      <p>С уважением,<br>
      [Ваше имя]
      </p>
    `,
    },
    {
      id: "blank-resume",
      label: "Резюме",
      imageUrl: "templates/blank-resume.svg",
      initialContent: `
      <h1>[Ваше имя]</h1>
      <p>[Контактная информация]</p>

      <h2>Профессиональное резюме</h2>
      <p>
         Краткий обзор вашего профессионального опыта и основных сильных сторон.
      </p>

      <h2>Опыт работы</h2>
      <p>
          [Название компании] - [Должность]<br>
          [Дата начала] - [Дата окончания]
      </p>

      <h2>Образование</h2>
      <p> [Степень] - [Название учебного заведения]<br>
      [Дата выпуска] </p>

      <h2>Ключевые навыки</h2>
      <p>Перечень соответствующих навыков и компетенций.</p>
    `,
    },
    {
      id: "blank-bisuiness-letter",
      label: "Деловое письмо",
      imageUrl: "templates/blank-business-letter.svg",
      initialContent: `
      <h1>Деловое письмо</h1>
      <p>Это шаблон делового письма.</p>
    `,
    },
    {
      id: "blank-project-proposal",
      label: "Проектное предложение",
      imageUrl: "templates/blank-project-proposal.svg",
      initialContent: `
      <h1>Проектное предложение</h1>
      <h2>Управляющее резюме</h2>
      <p>
         Краткий обзор проектного предложения.
      </p>

      <h2>Цели проекта</h2>
      <p>
          Основные цели и ожидаемые результаты.
      </p>

      <h2>План реализации</h2>
      <p>Стратегия и методология реализации проекта.</p>

      <h2>Требуемые ресурсы</h2>
      <p>Требования к команде, оборудованию и бюджету.</p>
    `,
    },
    {
      id: "blank-software-proposal",
      label: "Предложение по разработке ПО",
      imageUrl: "templates/blank-software-proposal.svg",
      initialContent: `
      <h1>Предложение по разработке ПО</h1>
      <h2>Обзор проекта</h2>
      <p>
          Краткое описание предлагаемого проекта разработки программного обеспечения.
      </p>

      <h2>Объем работ</h2>
      <p>
          Подробная разбивка результатов проекта и требований.
      </p>

      <h2>Хронология</h2>
      <p>Основные этапы проекта и график поставок.</p>

      <h2>Стоимость</h2>
      <p>Разбивка стоимости и условия оплаты.</p>
    `,
    },
  ],
];
