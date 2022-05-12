import React from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import { LoremIpsum } from "lorem-ipsum";

import BookReviewDetail from "../components/bookreviews/BookReviewDetail";
import Comments from "../components/comments/Comments";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const demoP = lorem.generateParagraphs(3);

const booksList = [
  {
    id: "alh",
    author: "Ethan Tulpy",
    bookAuthor: "Ethan Joella",
    publishDate: "2022",
    name: "A Little Hope",
    reviewText:
      "Freddie and Greg Tyler seem to have it all: a comfortable home at the edge of the woods, a beautiful young daughter, a bond that feels unbreakable. But when Greg is diagnosed with a rare and aggressive form of cancer, the sense of certainty they once knew evaporates overnight. Meanwhile, Darcy Crowley is still coming to terms with the loss of her husband as she worries over her struggling adult son, Luke. Elsewhere, Ginger Lord returns home longing for a lost relationship; Ahmed Ghannam wonders if he’ll ever find true love; and Greg’s boss, Alex Lionel, grapples with a secret of his own.\nFreddie and Greg Tyler seem to have it all: a comfortable home at the edge of the woods, a beautiful young daughter, a bond that feels unbreakable. But when Greg is diagnosed with a rare and aggressive form of cancer, the sense of certainty they once knew evaporates overnight. Meanwhile, Darcy Crowley is still coming to terms with the loss of her husband as she worries over her struggling adult son, Luke. Elsewhere, Ginger Lord returns home longing for a lost relationship; Ahmed Ghannam wonders if he’ll ever find true love; and Greg’s boss, Alex Lionel, grapples with a secret of his own." +
      demoP,
    src: "https://fromfirstpagetolast.files.wordpress.com/2022/04/9781739966003-1.jpg",
  },
  {
    id: "gio",
    author: "Reha Gürsel",
    bookAuthor: "Donna Leon",
    publishDate: "2020",
    name: "Give Unto Others",
    reviewText:
      "When Comissario Guido Brunetti is approached by an old neighbour he doesn’t know how he can help her when she details the vague possibility her son-in-law may be in trouble. It appears that no law has been broken and he would be intruding on a private family matter. But Brunetti recalls the kindness offered by the neighbour’s mother to his own mother and this drives him to look further, bending the limits of professional propriety in the process. It has been 31 years since the introduction of Commissario Guido Brunetti in Death at La Fenice. In those intervening years readers have seen his children grow and mature, his friendships solidify or fade away and his relationship with his wife, Paola, continue to evolve. Someone new to the series may think that 31 books is a lot of time to invest in a series. In my opinion, for what it’s worth, that would be time well spent. This is a crime series when oftentimes there is a question as to whether a crime has been committed at all. The books often look at political, environmental or social issues, commenting on the frustration of people having to face bureaucracy and corruption in the process. There is often the vague sense of wrong doing, not necessarily of a life threatening nature but rather of a threat to society. Such is the case with Give Unto Others. There is no murder to solve. There are contemplations on legal loopholes, exploitation of charities and exploitation of relationships as a means to an end.",
    src: "https://fromfirstpagetolast.files.wordpress.com/2022/02/image.jpg",
  },
  {
    id: "cotd",
    author: "Jack Green",
    bookAuthor: "Jonathan Kellerman",
    publishDate: "2018",
    name: "City of the Dead",
    reviewText:
      "Two removal drivers find more than they bargained for when they run over a naked man who had seemingly appeared from nowhere. In a house close by, another body is found. Lieutenant Milo Sturgis calls in his friend, psychologist Alex Delaware, who realises he knows the dead woman. As events unfold the case becomes ever more mysterious as the list of suspects dwindles. Will Alex and Milo figure out how the two people came to die?",
    src: "https://fromfirstpagetolast.files.wordpress.com/2022/02/image-1.jpg",
  },
  {
    id: "lic",
    author: "Mark Twin",
    bookAuthor: "Bonnie Garmus",
    publishDate: "2021",
    name: "Lessons in Chemistry",
    reviewText:
      "Elizabeth Zott is a scientist. She is certainly not someone who should be the host of a TV cookery show. But circumstances, mainly chauvanistic men, have led to her needing to earn money and so she finds herself the star of Supper at Six. But if she’s going to be a TV cook then she’ s going to do it her way, with chemistry. She’s going to start a chain reaction that challenges the role of women in the 1960s.",
    src: "https://fromfirstpagetolast.files.wordpress.com/2022/04/image.jpg",
  },
];

const ReviewDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const reviewDetail = booksList.find((book) => book.id === params.reviewId);

  if (!reviewDetail) {
    return <p>No Review Found!</p>;
  }

  return (
    <React.Fragment>
      <BookReviewDetail reviewDetail={reviewDetail} />
      <Route path={/* `/reviewList/${params.reviewId}` */ match.path} exact>
        <div className="centered">
          <Link
            to={`${match.url}/comments`}
            className="btn--flat"
          >
            Show Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default ReviewDetail;
