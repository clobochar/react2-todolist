function Input ({value, handleChange, placeholder}) {
    return <input value={value} onChange={(e) => handleChange(e.target.value)} placeholder={placeholder} />
}

export default Input;
