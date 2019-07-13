import { Property } from "../../services/property/Property";
import { useState, useEffect } from "react";

export function useProperty<T>(property: Property<T>, deps: readonly any[]) {
  const [value, setValue] = useState(property.get())
  useEffect(() => {
    setValue(property.get())
    return property.subscribe(() => setValue(property.get()))
  }, deps)
  return value
}
