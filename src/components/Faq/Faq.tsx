import { assets } from '../../constants/assets'
import './Faq.css'

const faqs = [
  {
    question: 'Is there a Membership Fee?',
    answer: 'Nope.',
  },
  {
    question: 'Are events held online or hybrid?',
    answer: 'The events can be held either online or in-person (face to face), depending on the circumstances and preferences.',
  },
  {
    question: "I'm not from UPHSL, can I still join?",
    answer: 'Unfortunately, we only accept bonafide Perpetualites CCS students as of the moment.',
  },
] as const

export function Faq() {
  return (
    <section className="gdc-faq" id="faq" aria-labelledby="faq-heading">
      <div className="gdc-faq__inner">
        <img src={assets.yukiQuestioning} alt="" className="gdc-faq__img" aria-hidden />
        <div className="gdc-faq__content">
          <h2 className="gdc-faq__heading" id="faq-heading">FAQ s</h2>
          <div className="gdc-faq__list">
            {faqs.map((item, i) => (
              <div key={i} className="gdc-faq__item">
                <p className="gdc-faq__question">{item.question}</p>
                <p className="gdc-faq__answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
