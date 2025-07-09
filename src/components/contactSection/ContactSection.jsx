import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GrNext } from 'react-icons/gr'
import '../../App.css'
import '../aboutSection/aboutSection.css'
import './contactSection.css'

const ContactSection = () => {
	const { t } = useTranslation()
	const [form, setForm] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	})

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value })
	}

	const handleSubmit = e => {
		e.preventDefault()

		const token = '8037595157:AAGWMbBmcj_QmmfU8tQ0rsB20qgSY_n95eM'
		const chatId = '7261954555'
		const text = `
		  <b>📩 Yangi xabar:</b>
👤 Ism: ${form.name}
📧 Email: ${form.email}
📞 Telefon: ${form.phone}
📝 Xabar: ${form.message}						
		`

		fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat_id: chatId,
				text: text,
				parse_mode: 'HTML',
			}),
		})
			.then(res => {
				if (res.ok) {
					alert('Xabar yuborildi ✅')
					setForm({ name: '', email: '', phone: '', message: '' })
				} else {
					alert('Xabar yuborilmadi ❌')
				}
			})
			.catch(err => {
				console.error('Telegram Error:', err)
			})
	}

	return (
		<div className='contact-section'>
			<h1>Contact</h1>
			<div className='content-primary'></div>
			<div className='contact'>
				<form className='form' onSubmit={handleSubmit}>
					<input
						required
						name='name'
						value={form.name}
						onChange={handleChange}
						type='text'
						placeholder={t('name')}
						className='input'
					/>
					<input
						required
						name='email'
						type='email'
						value={form.email}
						onChange={handleChange}
						placeholder={t('email')}
						className='input'
					/>
					<input
						required
						name='phone'
						type='number'
						value={form.phone}
						onChange={handleChange}
						placeholder={t('phone number')}
						className='input'
					/>

					<input
						name='message'
						type='text'
						value={form.message}
						onChange={handleChange}
						className='input-message'
						placeholder={t('message')}
					/>

					<button type='submit' className='btn-primary'>
						{t('Send')}
					</button>
				</form>
				<div className='contact-inform'>
					<div className='c-inform'>
						<div className='self'>
							<GrNext className='about-icon' />
							<h3>{t('Address')}:</h3>
							<h4>{t('Samarkand, Amur temur 12')}</h4>
						</div>

						<div className='self'>
							<GrNext className='about-icon' />
							<h3>{t('Contact Us')}:</h3>
							<h4>+998 (94) 425 29 39</h4>
						</div>

						<div className='self'>
							<GrNext className='about-icon' />
							<h3>{t('Email')}:</h3>
							<h4>ogabekmaxammadov022006</h4>
						</div>

						<div className='map'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196633.24528004078!2d66.80307380511267!3d39.64083630326765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d191960077df7%3A0x487636d9d13f2f57!2z0KHQsNC80LDRgNC60LDQvdC0LCDQodCw0LzQsNGA0LrQsNC90LTRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1744859215021!5m2!1sru!2s'
								title='map'
								width='100%'
								height='200'
								style={{ border: 0 }}
								allowFullScreen=''
								loading='lazy'
								referrerPolicy='no-referrer-when-downgrade'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactSection
