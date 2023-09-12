export function SelectOptions({array, initialText}) {
    return (
        <>
            <option value='' disabled>{initialText}</option>
            {array.map(item => <option key={item} value={item}>{item}</option>)}
        </>)
}