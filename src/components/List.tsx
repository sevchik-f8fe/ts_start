import { ReactNode } from 'react';

interface IList<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
}

export default function List<T>(props: IList<T>) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'start', gap: '.5em', margin: '1em 0' }}>
            {props.items.map(props.renderItem)}
        </div>
    )
}