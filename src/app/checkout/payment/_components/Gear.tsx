import style from "./Gear.module.scss"

const Gear = () => {
  return (
    <div className={style['wrapper']}>
      <div className={style[`gears`]}>
      
        <div className={style[`gear-container`]}>
          <div className={style["gear-rotate"]}></div>
          <div className={style["gear-rotate-left"]}></div>
        </div>
      </div>
      <h1>Payment method not added yet.</h1>
    </div>
  )
}

export default Gear