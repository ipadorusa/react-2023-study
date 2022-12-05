export default function List({item}) {
  const listItem = item.map((val,idx) => <li key={idx}>{val}</li>)
  return (
    <ul>
      {listItem}
    </ul>
  )
}