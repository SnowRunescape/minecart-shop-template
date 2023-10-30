import { RichTextProps } from './types';
import styles from './index.module.css';

const RichText = (props: RichTextProps) => {
  const { html, className } = props;

  return (
    <div className={`${styles.rich_text} ${className}`} dangerouslySetInnerHTML={{__html: html}} />
  );
}

export default RichText;