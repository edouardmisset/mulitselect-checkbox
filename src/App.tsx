import MultiselectCheckbox from './MultiselectCheckbox'

const options = [
  { label: 'Item One', checked: false },
  { label: 'Item Two', checked: false },
  { label: 'Item Three', checked: false },
]

function App() {
  return (
    <MultiselectCheckbox
      options={options}
      onChange={data => {
        console.log(data)
      }}
    />
  )
}

export default App
