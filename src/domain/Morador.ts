import { Entity } from "./common/Entity";
import { MoradoresProps } from "./types/MoradorTypes";

export class Moradores extends Entity<MoradoresProps> {
  private constructor(public props: MoradoresProps) {
    super(props.id, props);
  }

  public getID(): string {
    return this.props.id;
  }

  public create(props: MoradoresProps): Moradores {
    return new Moradores({ ...props });
  }
}
