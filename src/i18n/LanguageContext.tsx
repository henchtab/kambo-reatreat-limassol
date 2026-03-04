import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    // Hero
    "hero.eyebrow": "Private Kambo Retreat • Limassol, Cyprus",
    "hero.headline1": "Everyone thinks you're living the dream island life.",
    "hero.headline2": "But you've forgotten what it feels like to actually breathe.",
    "hero.subhead": "Stop trying to fix a burnt-out body with mindset podcasts. Go through a radical cellular cleanse and get your baseline energy back in 1 day.",
    "hero.cta": "Drop the dead weight",

    // Offer
    "offer.title": "The Deep Reset.",
    "offer.text": "This isn't a yoga retreat, a spa weekend, or a spiritual talking circle. It's an uncompromising Amazonian cellular cleansing technology (Kambo). A systemic intervention in your biology that physically flushes out accumulated stress, toxins, and the toll of living on overdrive.",
    "offer.highlight": "(Kambo)",

    // Segmentation
    "seg.eyebrow": "Recognize yourself?",
    "seg.title": "Your life feels like an overheating server:",
    "seg.s1.title": "The Illusion of Energy",
    "seg.s1.text": "You wake up exhausted. A double espresso gives you a one-hour spike, and then you're crushed by a concrete slab again.",
    "seg.s2.title": "Living in your Head",
    "seg.s2.text": "Your brain generates money, deals, and projects, but your body has turned into a rigid shell. Everything from your neck to your lower back screams with tension.",
    "seg.s3.title": "Emotional Numbness",
    "seg.s3.text": "The sea view doesn't excite you anymore. The taste of food, achievements, purchases—everything feels flat, like you're watching your life through muddy glass.",
    "seg.s4.title": "Background Anxiety",
    "seg.s4.text": "You're haunted by a sticky feeling that you're falling behind or everything is about to collapse, even when the numbers in your bank account are growing.",

    // What it is
    "what.eyebrow": "What it is",
    "what.title": "It's not magic. It's hardcore biochemistry.",
    "what.p1": "Kambo is a peptide cocktail (the secretion of the Phyllomedusa bicolor frog). Once it enters your lymphatic system, it acts like a",
    "what.p1.bold": "systemic antivirus",
    "what.p1.end": ". It locates inflammation, blocked tissues, and cellular garbage, and forces your body to purge it.",
    "what.p2": "This is an intense, deep somatic flush that bypasses your overthinking mind and works directly with your",
    "what.p2.bold": '"hardware."',

    // Why
    "why.eyebrow": "Why",
    "why.title": "Because talking doesn't work anymore.",
    "why.p1": "You can spend years discussing your trauma and fatigue in therapy. But",
    "why.p1.bold": "the body keeps the score",
    "why.p1.end": ". Cortisol, adrenaline, unexpressed anger, and relocation stress are literally trapped in your fascia and bloodstream.",
    "why.p2": "Kambo creates a powerful, artificial physiological impulse that breaks this dam. You need to tear down this rotten foundation of tension to build something real in its place.",

    // Results
    "res.eyebrow": "What you get",
    "res.title": "Your Biological Advantage:",
    "res.r1.title": "Zero Brain Fog",
    "res.r1.text": "That moment when your inner critic finally shuts up. A ringing, crystal-clear emptiness and absolute focus take over.",
    "res.r2.title": "Body without Armor",
    "res.r2.text": "The muscle tension drops. For the first time in years, you'll take a full, deep breath without a heavy weight on your chest.",
    "res.r3.title": "Raw Energy",
    "res.r3.text": "Your battery is back to 100%. No stimulants, no biohacking, no nootropics. Just clean, steady drive.",
    "res.r4.title": "Immune System Reboot",
    "res.r4.text": "Your physiology erases chronic fatigue patterns and resets to factory settings.",

    // Who
    "who.eyebrow": "Who it fits",
    "who.title": "Only for those ready to face the truth:",
    "who.f1": "Entrepreneurs, IT professionals, and high-achievers whose nervous systems are completely burnt out.",
    "who.f2": 'Those stuck in a "Groundhog Day" loop in Cyprus looking for a massive, radical shake-up.',
    "who.f3": "People who understand that true transformation always requires pushing through discomfort.",
    "who.f4": "Those tired of esoteric fluff who want a measurable, physical result.",
    "who.not.eyebrow": "What it is NOT",
    "who.not.title": "Let's be brutally honest. We are not for everyone.",
    "who.n1.title": "This is not a spa day.",
    "who.n1.text": "It will be hard. You will feel nauseous, sweat heavily, and experience intense discomfort. Your body will fight fiercely to release the toxins.",
    "who.n2.title": "This is not a magic pill.",
    "who.n2.text": "Kambo clears your system and gives you massive resources. But how you use this new energy is your own responsibility.",
    "who.n3.title": "This is not a cult.",
    "who.n3.text": "We don't chant mantras or cleanse your karma. We work with physiology, lymph, and the nervous system. Dry, safe, professional.",

    // Contact
    "contact.eyebrow": "Ready to step out of the loop?",
    "contact.title": "Apply for a private screening.",
    "contact.desc": "We don't take everyone—this practice has strict medical contraindications. Fill out the form, and we'll contact you for a quick audit of your current state.",
    "contact.name": "Name",
    "contact.name.ph": "Your name",
    "contact.phone": "Phone number",
    "contact.phone.ph": "+357 99 000 000",
    "contact.goal": "Main goal",
    "contact.goal.ph": "What physical or mental weight do you want to drop?",
    "contact.submit": "Apply for an audit",
    "contact.success.title": "Application received.",
    "contact.success.text": "We'll reach out shortly.",
    "contact.social": "Hate filling out forms? Let's talk directly.",
    "contact.wa": "Message on WhatsApp",
    "contact.tg": "Message on Telegram",
    "contact.note": "I answer personally, no bots",
  },
  ru: {
    // Hero
    "hero.eyebrow": "Закрытый ретрит с Камбо • Лимассол, Кипр",
    "hero.headline1": "Все думают, что ты живешь жизнь мечты на острове.",
    "hero.headline2": "А ты просто забыл, когда в последний раз по-настоящему дышал.",
    "hero.subhead": "Хватит пытаться вылечить выгоревшее тело подкастами про успешный успех. Пройди радикальную клеточную чистку и верни себе первобытную энергию за 1 день.",
    "hero.cta": "Сбросить балласт",

    // Offer
    "offer.title": "Глубинный Ресет.",
    "offer.text": "Это не йога-тур, не релакс-выходные и не разговоры о высоком. Это бескомпромиссная амазонская технология клеточного очищения (Камбо). Системное вмешательство в твою биологию, которое физически выбьет из тела накопленный стресс, токсины и последствия жизни на «повышенных оборотах».",
    "offer.highlight": "(Камбо)",

    // Segmentation
    "seg.eyebrow": "Узнаешь себя?",
    "seg.title": "Твоя жизнь похожа на перегретый сервер:",
    "seg.s1.title": "Иллюзия энергии",
    "seg.s1.text": "Ты просыпаешься уже уставшим. Двойной эспрессо дает скачок на час, а потом тебя снова накрывает бетонной плитой.",
    "seg.s2.title": "Жизнь «в голове»",
    "seg.s2.text": "Твой мозг генерирует деньги, сделки и проекты, но твое тело превратилось в жесткий панцирь. От шеи до поясницы — всё звенит от напряжения.",
    "seg.s3.title": "Эмоциональная анестезия",
    "seg.s3.text": "Море из окна больше не радует. Вкус еды, достижения, покупки — всё ощущается плоским, словно ты смотришь на свою жизнь через мутное стекло.",
    "seg.s4.title": "Фоновая тревога",
    "seg.s4.text": "Тебя преследует липкое чувство, что ты что-то не успеваешь или всё вот-вот рухнет, даже когда цифры на счетах растут.",

    // What it is
    "what.eyebrow": "Что это",
    "what.title": "Это не магия. Это жесткая биохимия.",
    "what.p1": "Камбо — пептидный коктейль (секрет лягушки Phyllomedusa bicolor). Попадая в твою лимфатическую систему, он действует как",
    "what.p1.bold": "системный антивирус",
    "what.p1.end": ". Он находит очаги воспаления, заблокированные ткани и клеточный мусор, а затем принудительно заставляет тело всё это отторгнуть.",
    "what.p2": "Это интенсивный, глубокий соматический сброс, который обходит твой вечно контролирующий разум и работает напрямую с",
    "what.p2.bold": "«железом».",

    // Why
    "why.eyebrow": "Зачем",
    "why.title": "Потому что разговоры больше не работают.",
    "why.p1": "Ты можешь годами обсуждать свои травмы и усталость с психологом. Но",
    "why.p1.bold": "тело помнит всё",
    "why.p1.end": ". Кортизол, адреналин, непрожитый гнев и стресс от релокации буквально застряли в твоих фасциях и крови.",
    "why.p2": "Камбо создает мощный, искусственный физиологический импульс, который ломает эту плотину. Тебе нужно разрушить этот гнилой фундамент напряжения, чтобы на его месте построить что-то настоящее.",

    // Results
    "res.eyebrow": "Что получите",
    "res.title": "Твое биологическое преимущество:",
    "res.r1.title": "Тишина в голове (Zero Brain Fog)",
    "res.r1.text": "Тот самый момент, когда внутренний критик наконец-то затыкается. Наступает звенящая, кристальная пустота и абсолютный фокус.",
    "res.r2.title": "Тело без брони",
    "res.r2.text": "Мышечные панцири спадают. Ты впервые за несколько лет сделаешь полный, глубокий вдох без тяжести в груди.",
    "res.r3.title": "Звериная энергия",
    "res.r3.text": "Твоя батарейка снова заряжена на 100%. Без стимуляторов, биохакинга и ноотропов. Чистый, ровный драйв.",
    "res.r4.title": "Перезапуск иммунитета",
    "res.r4.text": "Твоя физиология стирает паттерны хронической усталости и возвращается к заводским настройкам.",

    // Who
    "who.eyebrow": "Кому подходит",
    "who.title": "Только для тех, кто готов смотреть правде в глаза:",
    "who.f1": "Предпринимателям, IT-специалистам и достигаторам, чья нервная система выгорела дотла.",
    "who.f2": "Тем, кто застрял в «дне сурка» на Кипре и ищет мощную, радикальную встряску.",
    "who.f3": "Людям, которые понимают, что истинная трансформация всегда идет через дискомфорт.",
    "who.f4": "Тем, кто устал от эзотерической «воды» и хочет получить измеримый, телесный результат.",
    "who.not.eyebrow": "Чем не является",
    "who.not.title": "Давай начистоту. Мы не для всех.",
    "who.n1.title": "Это не спа-процедура.",
    "who.n1.text": "Будет тяжело. Тебя будет тошнить, бросать в жар, ты испытаешь сильный дискомфорт. Твое тело будет отчаянно бороться, отдавая токсины.",
    "who.n2.title": "Это не волшебная таблетка.",
    "who.n2.text": "Камбо вычистит твою систему и даст колоссальный ресурс. Но как ты распорядишься этой новой энергией дальше — твоя личная ответственность.",
    "who.n3.title": "Это не секта.",
    "who.n3.text": "Мы не поем мантры и не чистим карму. Мы работаем с физиологией, лимфой и нервной системой. Сухо, безопасно, профессионально.",

    // Contact
    "contact.eyebrow": "Готов выйти из матрицы?",
    "contact.title": "Оставь заявку на закрытый скрининг.",
    "contact.desc": "Мы берем не всех — практика имеет строгие медицинские противопоказания. Заполни форму, и мы свяжемся с тобой для аудита твоего текущего состояния.",
    "contact.name": "Имя",
    "contact.name.ph": "Ваше имя",
    "contact.phone": "Номер",
    "contact.phone.ph": "+357 99 000 000",
    "contact.goal": "Главный запрос",
    "contact.goal.ph": "От чего физически или ментально хочешь избавиться?",
    "contact.submit": "Отправить заявку на аудит",
    "contact.success.title": "Заявка получена.",
    "contact.success.text": "Мы свяжемся с вами в ближайшее время.",
    "contact.social": "Терпеть не можешь заполнять формы? Давай поговорим прямо.",
    "contact.wa": "Написать в WhatsApp",
    "contact.tg": "Написать в Telegram",
    "contact.note": "Отвечаю лично, без ботов",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
