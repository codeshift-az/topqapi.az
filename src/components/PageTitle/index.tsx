interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return (
    <div className="tf-page-title style-2">
      <div className="container-full">
        <div className="heading text-center">{title}</div>
      </div>
    </div>
  );
};

export default PageTitle;
