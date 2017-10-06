import { DeleteRecipeResultState } from './delete-recipe-result-state';

export class DeleteRecipeResult {

  constructor(public state: DeleteRecipeResultState, public deletedRecipeIdResponse?: { deletedRecipeId: string }) {
  }
}
