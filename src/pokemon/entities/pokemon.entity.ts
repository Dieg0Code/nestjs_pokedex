import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Este decorador indica que es un esquema de mongoose
@Schema()
export class Pokemon extends Document {
  // Document es una interfaz de mongoose, nos permite usar los metodos de mongoose
  // id: string mongo lo añade automaticamente
  // @Prop() es un decorador de mongoose, nos permite definir propiedades para los campos de la base de datos
  // podemos definir propiedades como unique, index, required, etc
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
