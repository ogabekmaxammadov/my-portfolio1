import React from 'react'
import { FaBootstrap } from 'react-icons/fa'
import { FaSquareJs } from 'react-icons/fa6'
import { GrNext, GrProjects } from 'react-icons/gr'
import { ImHtmlFive2 } from 'react-icons/im'
import { IoLogoCss3, IoMdHappy } from 'react-icons/io'
import { IoCodeWorking } from 'react-icons/io5'
import { RiReactjsFill } from 'react-icons/ri'
import '../../App.css'
import aboutMyImg from '../../assets/assetsImg/my-img.jpg'
import './aboutSection.css'
import { useTranslation } from 'react-i18next'

const AboutSection = () => {
	const { t } = useTranslation()
	return (
		<div className='about-section'>
			<h1 className='font-size-30'>{t('About')}</h1>
			<div className='content-primary'></div>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
				molestiae a hic sunt magni vero quis nulla ullam. Suscipit aperiam
				eaque, cum blanditiis illo esse debitis reprehenderit atque facere
				dolores.
			</p>

			<div className='about-inform display-flex'>
				<img src={aboutMyImg} alt='' />
				<div className='about-information'>
					<h2>{t('Frontend developer')}</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem
						vero neque.
					</p>
					<div className='full-information'>
						<div className='inform-1'>
							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Birthday')}:</h3>
								<h4>14 February 2006</h4>
							</div>

							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Website')}:</h3>
								<h4>www.example.com</h4>
							</div>

							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Phone')}:</h3>
								<h4>+998(94) 543 29 39</h4>
							</div>

							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('City')}:</h3>
								<h4>Samarkand</h4>
							</div>
						</div>

						<div className='inform-2'>
							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Age')}:</h3>
								<h4>19</h4>
							</div>

							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Degree')}:</h3>
								<h4>Midlle</h4>
							</div>

							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Email')}:</h3>
								<h4>ogabekmaxammadov022006</h4>
							</div>

							<div className='self'>
								<GrNext className='about-icon' />
								<h3>{t('Freelance')}:</h3>
								<h4>{t('Aviable')}</h4>
							</div>
						</div>
					</div>
					<p className='par'>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
						nostrum dicta laborum!
					</p>
				</div>
			</div>

			<div className='skills-inform display-flex'>
				<div className='skills'>
					<div className='skill-1'>
						<div className='skill-inform'>
							<h3>
								HTML <ImHtmlFive2 />
							</h3>
							<h3>95%</h3>
						</div>
						<div className='skill-prosent'>
							<div className='prosent'></div>
						</div>
					</div>

					<div className='skill-1'>
						<div className='skill-inform'>
							<h3>
								CSS <IoLogoCss3 />
							</h3>
							<h3>85%</h3>
						</div>
						<div className='skill-prosent'>
							<div className='prosent-css'></div>
						</div>
					</div>

					<div className='skill-1'>
						<div className='skill-inform'>
							<h3>
								JavaScript <FaSquareJs />
							</h3>
							<h3>80%</h3>
						</div>
						<div className='skill-prosent'>
							<div className='prosent-js'></div>
						</div>
					</div>

					<div className='skill-1'>
						<div className='skill-inform'>
							<h3>
								ReactJs <RiReactjsFill />
							</h3>
							<h3>75%</h3>
						</div>
						<div className='skill-prosent'>
							<div className='prosent-react'></div>
						</div>
					</div>

					<div className='skill-1'>
						<div className='skill-inform'>
							<h3>
								Bootstrap <FaBootstrap />
							</h3>
							<h3>75%</h3>
						</div>
						<div className='skill-prosent'>
							<div className='prosent-react'></div>
						</div>
					</div>
				</div>

				<div className='additional-inform'>
					<div className='experience'>
						<IoCodeWorking className='inform-icon' />
						<h4>{t('3 years')}</h4>
						<h3>{t('Experience')}</h3>
					</div>
					<div className='experience'>
						<GrProjects className='inform-icon' />
						<h4>100+</h4>
						<h3>{t('Projects')}</h3>
					</div>
					<div className='experience'>
						<IoMdHappy className='inform-icon' />
						<h4>90+</h4>
						<h3>{t('Happy clients')}</h3>
					</div>
					<div className='experience'>
						<IoMdHappy className='inform-icon' />
						<h4>90+</h4>
						<h3>{t('Happy clients')}</h3>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutSection
