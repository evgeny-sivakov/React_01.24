import { FC } from 'react'

interface StatisticBlockProps {
  title: string
  items: Item[]
}

interface Item {
  name: string
  quantity: number
}

const StatisticBlock: FC<StatisticBlockProps> = ({ title, items }) => {
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
