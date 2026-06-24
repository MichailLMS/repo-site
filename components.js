(function () {

  const R = window.SITE_ROOT || "";

  function set(id, html) {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = html;
    }
  }

  // ШАПКА

  set("site-header", `
    <header class="top-panel">
      <div class="top-container">
        <div class="top-left">
          <img src="${R}img/logo.png" alt="Логотип" class="top-logo">
            <div class="top-contacts">
              <p><img src="${R}img/phone-icon.png" alt=""><a href="tel:+375236225223">8 (0236) 22-52-23</a></p>
              <p><img src="${R}img/mail-icon.png" alt=""><a href="mailto:tcsonmr@mail.gomel.by">tcsonmr@mail.gomel.by</a></p>
            </div>
        </div>

        <!-- <div class="top-right">
          <img src="${R}img/banner1.png" alt="Площадка для общения" class="banner">
          <img src="${R}img/banner2.png" alt="Гос. поддержка инвалидов" class="banner">
        </div> -->
      </div>
    </header>
  `);

  // МЕНЮ

  set("site-nav", `
    <nav class="navbar">
      <ul class="menu">
        <li><a href="${R}index.html">Главная</a></li>
        <li class="dropdown">
          <a href="${R}AboutTheInstitution/index.html">Об учреждении ▼</a>
          <ul class="submenu">
            <li><a href="${R}AboutTheInstitution/Struct/index.html">Структура</a></li>
            <li><a href="${R}AboutTheInstitution/PersReception/index.html">График личного приёма</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="${R}StructuralDivisions/index.html">Структурные подразделения ▼</a>
          <ul class="submenu">
            <li><a href="${R}StructuralDivisions/Pervichka/index.html">Отделение первичного приема и оценка нуждаемости в социальной поддержке</a></li>
            <li><a href="${R}StructuralDivisions/SocSupport/index.html">Отделение социальной поддержки населения и осуществления функций по опеке и попечительству</a></li>
            <li><a href="${R}StructuralDivisions/ComplSupport/index.html">Отделение комплексной поддержки в кризисной ситуации и активного долголетия в условиях дневного пребывания</a></li>
            <li><a href="${R}StructuralDivisions/SocHelp/index.html">Отделение социальной помощи на дому</a></li>
            <li><a href="${R}StructuralDivisions/SocReabilit/index.html">Отделение социальной реабилитации, абилитации инвалидов</a></li>
            <li><a href="${R}StructuralDivisions/DepartAround/index.html">Отделение круглосуточного пребывания граждан пожилого возраста и инвалидов</a></li>
          </ul>
        </li>
        <li><a href="${R}Services/index.html">Услуги</a></li>
        <li><a href="${R}News/index.html">Новости</a></li>
        <li><a href="${R}Contacts/index.html">Контакты</a></li>
      </ul>
    </nav>
    
    <section class="hero">
      <h1>Учреждение «Территориальный центр социального обслуживания населения Мозырского района</h1>
      <p>Забота, поддержка и помощь каждому</p>
    </section>
  `);

  // МЕНЮ ИНФОРМАЦИЯ

  set("site-menu", `
    <nav class="side-menu">
      <ul>
        <li><a href="${R}Information/WorkWithAppeals/index.html">Работа с обращениями граждан и юридических лиц</a></li>
        <li><a href="${R}Information/RegionalMap/index.html">Региональная карта социальных контактов</a></li>
        <li><a href="${R}Information/SchematicStructure/index.html">Схематическая структура ТЦСОН</a></li>
        <li><a href="${R}Information/PortalSZ/index.html">Портал СЗ</a></li> <!-- Новое -->
        <li><a href="${R}Information/PreventingViolence/index.html">Профилактика домашнего насилия</a></li>
        <li><a href="${R}Information/Cybersecurity/index.html">Кибербезопасность</a></li>
        <li><a href="${R}Information/ActiveLongevity/index.html">Активное долголетие</a></li>
        <li><a href="${R}Information/Question-Answer/index.html">Вопрос-ответ</a></li>
        <li><a href="${R}Information/PsychologistsColumn/index.html">Колонка психолога</a></li>
        <li><a href="${R}Information/CrisisRoom/index.html">Кризисная комната</a></li>
        <li><a href="${R}Information/StateTSAssistance/index.html">Государственная адресная социальная помощь</a></li>
        <li><a href="${R}Information/FosterFamily/index.html">Замещающая семья</a></li>
        <li><a href="${R}Information/BenSocGuarantees/index.html">Льготы и социальные гарантии</a></li>
        <li><a href="${R}Information/ProvisionServicesRentAgreement/index.html">Оказание социальных услуг на основании договора ренты</a></li>
        <li><a href="${R}Information/Post-BoardingSupport/index.html">Постинтернатное сопровождение лиц из числа детей-сирот и детей, оставшихся без попечения родителей</a></li>
        <li><a href="${R}Information/GuardianshipTrusteeship/index.html">Опека и попечительство</a></li>
        <li><a href="${R}Information/IdentificationLargeFamily/index.html">Удостоверение многодетной семьи</a></li>
        <li><a href="${R}Information/Projects/index.html">Проекты</a></li>
        <li><a href="${R}Information/SocialWorker/index.html">Страничка социального работника</a></li>
        <li><a href="${R}Information/SocialBoardingHouses/index.html">Социальные пансионаты</a></li>
        <li><a href="${R}Information/SouvenirProducts/index.html">Сувенирная продукция</a></li>
        <li><a href="${R}Information/PaymentOneFinancial/index.html">Выплата единовременной материальной помощи к учебному году</a></li>
        <li><a href="${R}Information/AdministrativeProcedures/index.html">Административные процедуры</a></li>
        <li><a href="${R}Information/SocialAdvertising/index.html">Социальная реклама</a></li>
        <li><a href="${R}Information/AntiCorruption/index.html">Противодействие коррупции</a></li>
        <li><a href="${R}Information/ClearLanguage/index.html">Ясный язык</a></li>
        <li><a href="${R}Information/StateSymbols/index.html">Государственная символика</a></li>
        <li><a href="${R}Information/EthicsOfCommunication/index.html">Этика общения с людьми с инвалидностью</a></li>
        <li><a href="${R}Information/OOI/index.html">Общественные объединения инвалидов</a></li> <!-- Новое -->
        <li><a href="${R}Information/CooperationActionPlan/index.html">План мероприятий по сотрудничеству</a></li>
        <li><a href="${R}Information/MovementRules/index.html">Движение по правилам</a></li>
        <li><a href="${R}Information/DementiaCourse/index.html">Курс по профилактике деменции</a></li>
        <li><a href="${R}Information/HumanitarianActivities/index.html">Гуманитарная деятельность</a></li>
        <li><a href="${R}Information/InformationLabProtection/index.html">Информация об охране труда</a></li>
        <li><a href="${R}Information/SignLanguage/index.html">Обучение жестовому языку</a></li>
        <li><a href="${R}Information/TrainingTechnicalMeans/index.html">Обучение пользованию техническими средствами социальной реабилитации</a></li>      
      </ul>
    </nav>
  `);
  
  // МЕНЮ КОНТАКТЫ

  set("site-contacts", `
    <div class="sidebar-contacts">
      <h3>Контакты</h3>
      <p> &nbsp; </p>
      <p><a href="tel:+375236225223">8 (0236) 22-52-23</a> — Приемная</p>
      <p><a href="mailto:tcsonmr@mail.gomel.by">tcsonmr@mail.gomel.by</a>
        — только для деловой переписки</p>
      <p>247760, г. Мозырь, пл. Горького, д. 7</p>
      <p>Режим работы: 8.30 - 17.30</p>
      <p>Обед: 13.00 - 14.00</p>
      <p>Выходные: суббота, воскресенье</p>    
    </div>
  `);
    
    // МЕНЮ ПОРТАЛЫ

  set("site-portals", `
    <div class="sidebar-block portals">
      <p> &nbsp; </p>
      
      <ul>
        <li>
          <a href="http://качество-услуг.бел">
            <img src="${R}img/Kachestvo_uslug.png" alt="">
            Портал рейтинговой оценки качества услуг
          </a>
        </li>
        <li>
          <a href="https://president.gov.by/ru">
            <img src="${R}img/Internet_portal_PRB.png" alt="">
            Интернет-портал Президента Республики Беларусь
          </a>
        </li>
        <li>
          <a href="https://pravo.by">
            <img src="${R}img/Pravo-by.png" alt="">
            Национальный правовой интернет-портал Республики Беларусь
          </a>
        </li>
        <li>
          <a href="http://mintrud.gov.by/ru">
            <img src="${R}img/MinTrud.png" alt="">
            Министерство труда и социальной защиты Республики Беларусь
          </a>
        </li>
        <li>
          <a href="https://ktzsz-gomel.gov.by/">
            <img src="${R}img/KTZiSZ.png" alt="">
            Комитет по труду, занятости и социальной защите Гомельского областного исполнительного комитета
          </a>
        </li>
        <li>
          <a href="https://gomel.beltiz.by">
            <img src="${R}img/Bel_Tovar_Invalid.png" alt="">
            Гомельская областная организация Общественное объединение "Белорусское товарищество инвалидов по зрению"
          </a>
        </li>
        <li>
          <a href="http://gomel-region.by/ru">
            <img src="${R}img/GOIK.png" alt="">
            Гомельский областной исполнительный комитет
          </a>
        </li>
        <li>
          <a href="https://mozyrisp.gov.by/ru">
            <img src="${R}img/Mozyr_Isp_Kom.png" alt="">
            Мозырский районный исполнительный комитет
          </a>
        </li>
        <li>
          <a href="https://kids.pomogut.by/">
            <img src="${R}img/Pomogut-by.png" alt="">
            Pomogut.by | Безопасность детей в сети
          </a>
        </li>
        <li>
          <a href="https://pomogut.by/">
            <img src="${R}img/Pomogut-by_2.png" alt="">
            Pomogut.by | Мы оказываем информационную помощь людям в трудной жизненной ситуации
          </a>
        </li>
      </ul>
    </div>
  `);
    
  // ПОДВАЛ
  
  set("site-footer", `
    <footer class="footer">
      <div class="container">
        <p>© 2026, Учреждение "Территориальный центр социального обслуживания населения Мозырского района", г. Мозырь.</p>
      </div>
    </footer>
  `);

})();