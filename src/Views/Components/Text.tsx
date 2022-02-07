import faker from "@faker-js/faker";

export default function Text() {
  return (
    <div>
      <h1>{faker.address.city()}</h1>
    </div>
  );
}
