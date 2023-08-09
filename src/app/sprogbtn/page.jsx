import style from "@/style/style.module.scss"

const page = () => {
  return (
    <main className={style.main}>
      <div>
          <select name="danish" id="danish">
        <option value="flag"><img src="" alt="" />dk</option>
        <option value="flag">engs</option>
        <option value="flag">ger</option>
          </select>
      </div>
      
    </main>
    
  )
}

export default page