const StatisticBlock = ({ title, items }) => {
  return (
    <article>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.name}>
            <b>{item.name.toUpperCase()}</b>: {item.quantity}
          </li>
        ))}
      </ul>
    </article>
  )
}
export default StatisticBlock
