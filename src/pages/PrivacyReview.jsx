import LegalDraftPage from "../components/LegalDraftPage.jsx";
import privacyDraft from "../content/privacy-policy-review.md?raw";

export default function PrivacyReview({ onNavigate }) {
  return (
    <LegalDraftPage
      documentTitle="Privacy Policy — Draft for Review | Resolute Data Protection"
      markdown={privacyDraft}
      otherDraftHref="/terms-review"
      otherDraftLabel="Terms of Use Draft"
      onNavigate={onNavigate}
    />
  );
}
