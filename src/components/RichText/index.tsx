import styles from './index.module.css';
import { RichTextProps } from './types';

const RichText = (props: RichTextProps) => {
  const { html, className } = props;

  return (
    <div
      className={`${styles.rich_text} ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default RichText;