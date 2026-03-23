import DOMPurify from 'dompurify';

const SafeHtml = ({ html }: { html: string} ) => {
  const sanitizedContent = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} />;
}

export { SafeHtml }