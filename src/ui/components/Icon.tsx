export default function Icon(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  const { src, className } = props;
  return (
    <div className={className}>
      <img src={src} className="aspect-square h-full w-full fill-white" />
    </div>
  );
}
