import { useState } from 'react'

const MultiselectCheckbox = ({
  options = [{ label: 'Item One', checked: false }],
  onChange = (_data: any) => {
    console.log(_data)
  },
}) => {
  const [data, setData] = useState(options)

  const toggle = (index: number) => {
    const newData = [...data]
    newData.splice(index, 1, {
      label: data[index].label,
      checked: !data[index].checked,
    })
    setData(newData)
    onChange(newData.filter(x => x.checked))
  }

  return (
    <>
      {data.map((item, index) => (
        <label key={item.label}>
          <input
            readOnly
            type="checkbox"
            checked={item.checked || false}
            onClick={() => toggle(index)}
          />
          {item.label}
        </label>
      ))}
    </>
  )
}

export default MultiselectCheckbox
