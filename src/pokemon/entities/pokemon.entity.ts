import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Este decorador indica que es un esquema de mongoose
@Schema()
export class Pokemon extends Document {
  // Document es una interfaz de mongoose, nos permite usar los metodos de mongoose
  // id: string mongo lo añade automaticamente
  @Prop({
    unique: true,
    index: true,
  })
  name: string;
  @Prop({
    unique: true,
    index: true,
  })
  number: number;
}

// Se exporta un esquema creado a partir de la clase Pokemon
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
