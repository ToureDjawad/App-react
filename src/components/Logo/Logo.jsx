import s from "./style.module.css";
export function Logo({ image, title, subtitles }) {
  return (
    <>
      <div className={s.container}>
        <img className={s.img} src={image} alt="" srcset="" />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitles}>{subtitles}</span>
    </>
  );
}
