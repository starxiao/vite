import { useState, useEffect, useRef } from "react"

export default function Hooks() {
  const [num, setNum] = useState(0)
  const [obj, setObj] = useState({name: 'liumin'})

  const ele = useRef()

  const handleScroll = () => {

  }

  useEffect(() => {
    console.log('useEffect', num);
    console.log('useEffect', obj);

    getUserInfo().then(res => {
      setObj(res);
    })

  

    console.info('操作DOM节点', ele);

    window.addEventListener('scroll', handleScroll)

    const timer = setTimeout(() => {

    }, 500);

    return function() {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer)
    }
  })

  function handleClick() {
    setNum(num + 1)
    obj.name = 'xiaoxx'
    setObj(obj)

    console.log('click end ', num)
  }

  return (
    <div className="hooks-box" ref={ele}>
      <h1>Hooks box</h1>
      <p>{ num }</p>
      <p>{ obj.name }</p>
      <button onClick={handleClick}>点击</button>
    </div>
  )
}

function getUserInfo() {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        name: 'xiaoxx',
        age: 28
      })
    }, 3000)
  })
}