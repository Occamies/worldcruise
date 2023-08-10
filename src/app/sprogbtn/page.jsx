import style from "@/style/style.module.scss"
import flag from "../../../public/assets/denmark.png"

const page = () => {
  return (
    <main className={style.main}>
      <div>
        <select name="Language" id="language">
          <option value="DK">Dk</option>
          <option value="flag">Eng</option>
          <option value="flag">Ger</option>


        </select>
        <img src="" alt="" />
      </div>

    </main>

  )
}

export default page