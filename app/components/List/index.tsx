export type ListItem = {
  title?: string | JSX.Element,
  thumb?: string | JSX.Element,
  contents?: (string | JSX.Element)[],
}

export type ListProps = {
  list: ListItem[],
}

export function List({ list }: ListProps) {
  return (
    <ul className='bx-list'>
      {list &&
        list.length &&
        list.map((listItem, index) => {
          return (
            <li key={index.toString()} className='bx-contents-card'>
              {listItem.thumb && <div className='bx-contents-card-thumbnail'>{listItem.thumb}</div>}
              <div className='bx-contents-card-body'>
                {listItem.title && <div className='bx-contents-card-title'>{listItem.title}</div>}
                {listItem.contents &&
                  listItem.contents.map((content, contentIndex) => (
                    <div key={contentIndex} className='bx-contents-card-desc'>
                      {content}
                    </div>
                  ))}
              </div>
            </li>
          )
        })}
    </ul>
  )
}
