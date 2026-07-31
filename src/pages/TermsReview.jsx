import LegalDraftPage from "../components/LegalDraftPage.jsx";
import termsDraft from "../content/terms-of-use-review.md?raw";

export default function TermsReview({ onNavigate }) {
  return (
    <LegalDraftPage
      documentTitle="Terms of Use — Draft for Review | Resolute Data Protection"
      markdown={termsDraft}
      otherDraftHref="/privacy-review"
      otherDraftLabel="Privacy Policy Draft"
      onNavigate={onNavigate}
    />
  );
}
