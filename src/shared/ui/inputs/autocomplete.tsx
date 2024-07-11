import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteProps,
} from "@nextui-org/autocomplete";

type VariantBase = {
  id: number;
};

type Variant<K extends string> = VariantBase & {
  [key in K]: string | number;
};

type Props<K extends string> = {
  title: K;
  variants: Variant<K>[];
  value: string;
  setValue: (key: React.Key | null) => void;
} & Omit<AutocompleteProps, "children">;

export const AutocompleteInput = <K extends string>({
  title,
  variants,
  value,
  setValue,
  ...rest
}: Props<K>) => {
  return (
    <Autocomplete
      aria-label="autocomplete"
      inputProps={{
        classNames: {
          inputWrapper: "!bg-default",
        },
      }}
      selectedKey={value}
      size="lg"
      onSelectionChange={setValue}
      {...rest}
    >
      {variants.map((variant) => (
        <AutocompleteItem key={variant.id} value={variant[title]}>
          {variant[title]}
        </AutocompleteItem>
      ))}
    </Autocomplete>
  );
};
