import { HotComment } from '../../components/types/HotComment.types';
import { CommentAction, EnumComments } from '../actions/comments'

const initState: HotComment[] = []
export default function (prestate: HotComment[] = initState, action: CommentAction) {

  switch (action.type) {
    case EnumComments.UpdateComments:
      return [...action.data]
    default:
      return prestate
  }
}