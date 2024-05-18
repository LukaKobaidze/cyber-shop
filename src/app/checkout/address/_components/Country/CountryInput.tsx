import { useEffect, useState } from "react";
import { fetchCountry } from "./FetchCountry";
import styles from "./CountryInput.module.scss";
import Tooltip from "@/components/Tooltip";

const CountryInput: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [countries, setCountries] = useState<string[]>([]);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim() !== "") {
        const fetchedCountries = await fetchCountry(searchTerm);
        setCountries(fetchedCountries);

        if(fetchedCountries.length === 0){
          setMenu(false)
        }
      } else {
        setCountries([]);
        setMenu(false)
      }
    };
    fetchData();
  }, [searchTerm]);

  const handleCountryClick = (countryName: string) => {
    setSearchTerm(countryName);
    setCountries([]); // Clear the list of countries
    setMenu(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setSearchTerm(
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase()
    );

    if (inputValue.length > 2) {
      setMenu(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.countryInput}>
        <input
          type="text"
          placeholder=" "
          value={searchTerm}
          onChange={handleInputChange}
        />
        <label className={`${searchTerm.length > 0 ? styles.labelFilled : ""}`}>
          Country
        </label>
        <Tooltip position="top" text="Required">
          <div className={styles.required}>!</div>
        </Tooltip>
      </div>

      {menu && (
        <div className={styles.menu}>

          <ul>
            {countries.slice(0, 7).map(
              (
                country // Limit to 2 results
              ) => (
                <li key={country} onClick={() => handleCountryClick(country)}>
                  {country}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryInput;
