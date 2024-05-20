export interface Country {
  name: string;
}

export async function fetchCountry(name: string): Promise<string[]> {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    if (!response.ok) {
      throw new Error("Failed to fetch country names");
    }
    const data = await response.json();
    return data.map((country: any) => country.name.common) as string[];
  } catch (error) {
    console.error("Error fetching country names:", error);
    return [];
  }
}
