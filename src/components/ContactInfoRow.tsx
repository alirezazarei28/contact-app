import "../Sass/Contact.scss";

const ContactInfoRow = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="row">
      <p className="row__key">{title}</p>
      <p className="row__value">{value}</p>
    </div>
  );
};

export default ContactInfoRow;
