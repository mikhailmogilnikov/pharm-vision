import { RegistationForm } from "@/src/features/auth/registration";
import { Flex } from "@/src/shared/ui/flex";

export const RegistrationPage = () => {
  return (
    <Flex center className="h-dvh justify-center px-4" tag="section">
      <RegistationForm />
    </Flex>
  );
};
