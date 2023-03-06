import { IsInt, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @MinLength(1)
  number: number;
  @IsString()
  @MinLength(1)
  name: string;
}
