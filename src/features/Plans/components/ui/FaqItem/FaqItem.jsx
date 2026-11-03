import { Icon } from '../Icon/Icon';
import faqItemStyles from './faqItem.module.css';

export const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={faqItemStyles.item}>
      <button className={faqItemStyles.button} onClick={onClick}>
        <span className={faqItemStyles.question}>{question}</span>
        <Icon
          name="expand_more"
          size={24}
          className={`${faqItemStyles.icon} ${isOpen ? faqItemStyles.iconOpen : ''}`}
        />
      </button>
      <div className={`${faqItemStyles.answer} ${isOpen ? faqItemStyles.answerOpen : ''}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};
