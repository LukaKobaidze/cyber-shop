import { useEffect, useRef, useState } from "react";
import { fetchCountry } from "./fetchCountry";
import styles from "./CountryInput.module.scss";
import Tooltip from "@/components/Tooltip";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onValueChange: (value: string) => void;
}

let countryFetchAbortController: AbortController;
export default function CountryInput(props: Props) {
  const { value, onValueChange, ...restProps } = props;

  const [countries, setCountries] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (value.trim() !== "") {
        countryFetchAbortController?.abort();
        countryFetchAbortController = new AbortController();

        const fetchedCountries = await fetchCountry(
          value,
          countryFetchAbortController,
        );
        setCountries(fetchedCountries);
      } else {
        setCountries([]);
      }
    };
    fetchData();
  }, [value]);

  const handleCountryClick = (countryName: string) => {
    onValueChange(countryName);
    setCountries([]); // Clear the list of countries
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    onValueChange(inputValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.countryInput}>
        <input
          type="text"
          placeholder=" "
          value={value}
          onChange={handleInputChange}
          {...restProps}
        />
        <label className={`${value.length > 0 ? styles.labelFilled : ""}`}>
          Country
        </label>
        <Tooltip position="top" text="Required">
          <div className={styles.required}>!</div>
        </Tooltip>
      </div>

      {!!countries.length && (
        <div className={styles.menu}>
          <ul>
            {countries.slice(0, 7).map(
              (
                country, // Limit to 2 results
              ) => (
                <li key={country} onClick={() => handleCountryClick(country)}>
                  {country}
                </li>
              ),
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
