import type { AddressContentProps } from "../types/types";

export function AddressContent({ address }: AddressContentProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-gray-900 font-semibold">Endereço:</span>
      <input
        type="text"
        placeholder="Rua"
        value={address.street}
        readOnly
        className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 "
      />
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Bairro"
          value={address.neighborhood}
          readOnly
          className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 w-[80%]"
        />
        <input
          type="text"
          placeholder="Cidade"
          value={address.city}
          readOnly
          className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 "
        />
        <input
          type="text"
          placeholder="Estado"
          value={address.state}
          readOnly
          className="px-4 py-4 border-2 border-gray-300 rounded-md focus-within:border-2 focus-within:border-orange-600 w-[50%]"
        />
      </div>
    </div>
  );
}
