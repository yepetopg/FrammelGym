export const InstallationCard = ({ image, alt, className }) => {
  return (
    <div className={className}>
      <img src={image} alt={alt} />
    </div>
  );
};