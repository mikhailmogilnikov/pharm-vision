"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Key, useState } from "react";

import regionsData from "../config/russian-cities.json";

import { Flex } from "@/src/shared/ui/flex";
import { PasswordInput } from "@/src/shared/ui/inputs/password-input";
import { PhoneInput } from "@/src/shared/ui/inputs/phone-input";
import { Text } from "@/src/shared/ui/text";
import { AutocompleteInput } from "@/src/shared/ui/inputs/autocomplete";

export const RegistationForm = () => {
  const citiesArr = regionsData.map((obj, index) => ({ ...obj, id: index }));
  const [city, setCity] = useState<Key | null>();

  return (
    <Flex col className="max-w-96">
      <Text className="mb-4" size={24} weight={600}>
        Регистрация
      </Text>
      <Input
        classNames={{ inputWrapper: "!bg-default" }}
        placeholder="Имя и фамилия"
        size="lg"
      />
      <PhoneInput placeholder="Номер телефона" />
      <PasswordInput
        classNames={{ inputWrapper: "!bg-default" }}
        placeholder="Пароль"
        size="lg"
      />
      <PasswordInput
        classNames={{ inputWrapper: "!bg-default" }}
        placeholder="Подвердите пароль"
        size="lg"
      />
      <AutocompleteInput
        placeholder="Регион"
        setValue={setCity}
        title="city"
        value={city as string}
        variants={citiesArr}
      />
      <Button
        className="mt-4 font-medium"
        color="secondary"
        size="lg"
        variant="shadow"
      >
        Зарегистрироваться
      </Button>
      <Text className="mt-4" weight={600}>
        <span className="opacity-50">Уже есть аккаунт? </span>{" "}
        <a className="text-secondary" href="/login">
          Войти.
        </a>
      </Text>
    </Flex>
  );
};
