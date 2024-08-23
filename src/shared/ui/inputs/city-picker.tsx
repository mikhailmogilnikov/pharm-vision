import { Key, useEffect, useState } from 'react';
import { useDebounce } from 'react-use';

import { getGeoSuggestions } from '../../api/geosuggestions';
import { TGeomark, TGeoSuggestionsResponse } from '../../model/types/index.type';

import { AutocompleteInput } from './autocomplete';

type Props = {
  setCity: (city: TGeomark | null) => void;
};

export const CityPicker = ({ setCity }: Props) => {
  const [id, setId] = useState<Key | null>('');
  const [debouncedValue, setDebouncedValue] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState<TGeomark[]>([]);

  useDebounce(
    () => {
      setDebouncedValue(inputValue);
    },
    1000,
    [inputValue],
  );

  useEffect(() => {
    if (debouncedValue) {
      getGeoSuggestions(debouncedValue).then(async (suggestions) => {
        const res: TGeoSuggestionsResponse = await suggestions.json();

        const formatedRes: TGeomark[] = res.suggestions.map((obj) => ({
          ...obj,
          id: obj.unrestricted_value,
        }));

        setSuggestions(formatedRes);
      });
    }
  }, [debouncedValue]);

  useEffect(() => {
    const selectedSuggestion = suggestions.find((suggestion) => suggestion.id === id);

    setCity(selectedSuggestion as TGeomark);
  }, [id]);

  return (
    <AutocompleteInput
      placeholder='Ваш город'
      setValue={setId}
      title='value'
      value={id as string}
      variants={suggestions}
      onInputChange={setInputValue}
    />
  );
};
