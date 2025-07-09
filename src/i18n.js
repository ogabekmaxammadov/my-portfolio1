import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					'Ogabek Maxammadov': 'Ogabek Maxammadov',
					About: 'About',
					Contacts: 'Contacts',
					Information: 'Information',
					'Im Frontend developer': "I'm Frontend developer",
					'Frontend developer': 'Fronted developer',
					Home: 'Home',
					Projects: 'Projects',

					// About Page
					Birthday: 'Birthday',
					Website: 'Website',
					Phone: 'Phone',
					'Web site': 'Web site',
					City: 'City',
					Age: 'Age',
					Degree: 'Degree',
					Email: 'Email',
					Freelance: 'Freelance',
					Aviable: 'Aviable',
					'3 years': '3 years',
					Experience: 'Experience',
					'Happy clients': 'Happy clients',

					//Projects Page
					'View site': 'View site',
					'Show more': 'Show more',

					'It TAT AI': 'It TAT Ai',

					Kafe: 'Cafe',

					'12-maktab': 'School 12',
					Movies: 'Movies',

					'Suniy intellekt bilan integratsiya qilingan telegram web app':
						'Telegram web app integrated with artificial intelligence',

					"It TAT o'quv markazi uchun telegram web app.":
						'Telegram web app for the IT TAT training center.',

					'Kafelar uchun ishni yengilashtirish, buyurtmalar qabul qilish va bir nechta filallar uchun sayt.':
						'A website for cafes to streamline operations, accept orders, and have multiple branches.',

					'12-maktab uchun sayt. Demo versiyasi.':
						'Website for school 12. Demo version.',

					'API lar bilan integratsiya qilingan birinchi saytim.':
						'My first site integrated with APIs.',

					//Contact Page
					name: 'name',
					email: 'email',
					'phone number': 'phone number',
					message: 'message',
					Send: 'Send',
					Address: 'Address',
					'Samarkand, Amur temur 12': 'Samarkand, Amur temur 12',
					'Contact Us': 'Contact Us',
				},
			},
			uz: {
				translation: {
					'Ogabek Maxammadov': 'Ogabek Maxammadov',
					About: 'Haqimda',
					Contacts: 'Boglanish',
					Information: 'Malumot',
					'Im Frontend developer': 'Men Frontend dasturchisiman',
					'Frontend developer': 'Frontend dasturchi',
					Home: 'Asosiy',
					Projects: 'Loihalar',

					// About Page
					Birthday: 'tugilgan',
					Website: 'Websayt',
					'Web site': 'Web sayt',
					Phone: 'Raqam',
					City: 'Shaxar',
					Age: 'Yosh',
					Degree: 'Daraja',
					Email: 'Email',
					Freelance: 'Frilans',
					Aviable: 'Mavjud',
					'3 years': '3 yil',
					Experience: 'Tajriba',
					'Happy clients': 'Mijozlar',

					//Projects Page
					'View site': 'Ochish',
					'Show more': "Ko'proq",
					'It TAT AI': 'It TAT AI',

					Kafe: 'Kafe',

					'School 12': 'School 12',
					Movies: 'Filmlar',

					'Suniy intellekt bilan integratsiya qilingan telegram web app':
						'Suniy intellekt bilan integratsiya qilingan telegram web app',

					"It TAT o'quv markazi uchun telegram web app.":
						"It TAT o'quv markazi uchun telegram web app.",

					'Kafelar uchun ishni yengilashtirish, buyurtmalar qabul qilish va bir nechta filallar uchun sayt.':
						'Kafelar uchun ishni yengilashtirish, buyurtmalar qabul qilish va bir nechta filallar uchun sayt.',

					'12-maktab uchun sayt. Demo versiyasi.':
						'12-maktab uchun sayt. Demo versiyasi.',

					'API lar bilan integratsiya qilingan birinchi saytim.':
						'API lar bilan integratsiya qilingan birinchi saytim.',

					//Contact Page
					name: 'ismingizni kiriting',
					email: 'email manzilingz',
					'phone number': 'telefon raqamangiz',
					message: 'xabarni kiriting',
					Send: 'Yuborish',
					Address: 'Manzil',
					'Samarkand, Amur temur 12': 'Samarkand, Amur temur 12',
					'Contact Us': "Bog'lanish",
				},
			},
			ru: {
				translation: {
					'Ogabek Maxammadov': 'Огабек Махаммадов',
					About: 'Обо мне',
					Contacts: 'Контакт',
					Information: 'информация',
					'Im Frontend developer': 'Я фронтенд-разработчик',
					'Frontend developer': 'фронтенд-разработчик',
					Home: 'Дом',
					Projects: 'Проекты',

					// About Page
					Birthday: 'День рождения',
					Website: 'Веб-сайт',
					'Web site': 'Веб сайт',
					Phone: 'Телефон',
					City: 'Город',
					Age: 'Возраст',
					Degree: 'Степень',
					Email: 'Э.почта',
					Freelance: 'Фриланс',
					Aviable: 'Доступный',
					'3 years': '3 года',
					Experience: 'опыт',
					'Happy clients': 'клиенты',

					//Projects Page
					'View site': 'Открыть',
					'Show more': 'снова',

					'It TAT AI': 'ИТ ТАТ ИИ',

					Kafe: 'Кафе',
					'School 12': 'Школа 12',
					Movies: 'Фильмы',

					'Suniy intellekt bilan integratsiya qilingan telegram web app':
						'Веб-приложение Telegram интегрировано с искусственным интеллектом',

					"It TAT o'quv markazi uchun telegram web app.":
						'Веб-приложение Telegram для учебного центра IT TAT.',

					'Kafelar uchun ishni yengilashtirish, buyurtmalar qabul qilish va bir nechta filallar uchun sayt.':
						'Веб-сайт для кафе, позволяющий оптимизировать работу, принимать заказы и иметь несколько филиалов.',

					'12-maktab uchun sayt. Demo versiyasi.':
						'Сайт для школы 12. Демо-версия.',

					'API lar bilan integratsiya qilingan birinchi saytim.':
						'Мой первый сайт, интегрированный с API.',

					//Contact Page
					name: 'Ваше имя',
					email: 'электронная почта',
					'phone number': 'номер телефона',
					message: 'сообщение',
					Send: 'Отправлять',
					Address: 'Адрес',
					'Samarkand, Amur temur 12': 'Самарканд, Амур Темур 12',
					'Contact Us': 'Контакт',
				},
			},
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
