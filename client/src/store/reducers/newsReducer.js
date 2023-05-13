export  default function newsReducer(state={},action){
    switch (action.type) {
      case "get_news":
        return { ...state, news: action.payload };
      case "get_news_by_id":
        return { ...state,...action.payload };
      default:
        return state;
    }
}