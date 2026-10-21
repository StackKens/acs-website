import { cn } from '@/lib/utils'
import { Container, Cta, Eyebrow, PageHero, Section } from '@/components/ui/primitives'

/**
 * Features page.
 *
 * Exact match to acs.md:
 * - Page hero (.page-hero)
 * - Tabs navigation (.tabs) with panels (.panel .closer .rv .result .scroll table)
 * - "Who it's for" section (.who .rv)
 * - Before/After comparison (.ba .before .rv / .after .rv)
 * - FAQ (.faq .rv .details)
 * - Closing CTA (.section.tint .wrap .cta .rv)
 */

export function FeaturesPage() {
  return (
    <main>
      {/* =========================================================
       * Page Hero (matches acs.md: .page-hero > .wrap)
       * ========================================================= */}
      <section className="page-hero">
        <div className="wrap">
          <p className="eyebrow">Features</p>
          <h1>Everyday school work, in one place.</h1>
          <p className="lead">
            ACS is being built around the school day: pupil records, daily attendance and
            academic results, with an AI assistant to support teachers.
          </p>
        </div>
      </section>

      {/* =========================================================
       * Tabs & Panels (matches acs.md: .section > .wrap > .tabs + .panel)
       * ========================================================= */}
      <section className="section">
        <div className="wrap">
          <div className="tabs" role="tablist" aria-label="ACS features">
            <button className="tab" role="tab" aria-selected={true}>
              Records
            </button>
            <button className="tab" role="tab" aria-selected={false}>
              Attendance
            </button>
            <button className="tab" role="tab" aria-selected={false}>
              Results
            </button>
            <button className="tab" role="tab" aria-selected={false}>
              AI assistant
            </button>
          </div>

          {/* Records Panel */}
          <div
            className="panel"
            id="records"
            role="tabpanel"
            hidden
          >
            <div className="closer rv">
              <div>
                <p className="eyebrow">01 / Records</p>
                <h2>Know every pupil.</h2>
                <p className="lead">
                  Keep pupil information structured and accessible, rather than spread across
                  books and disconnected files.
                </p>
              </div>
              <div className="result">
                <h4>Pupil records</h4>
                <p className="meta">Primary 5 · Sample data</p>
                <div className="scroll">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Pupil</th>
                        <th scope="col">Class</th>
                        <th scope="col">Stream</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pupil 001</td>
                        <td>P5</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Pupil 002</td>
                        <td>P5</td>
                        <td>A</td>
                      </tr>
                      <tr>
                        <td>Pupil 003</td>
                        <td>P5</td>
                        <td>B</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Attendance Panel */}
          <div
            className="panel"
            id="attendance"
            role="tabpanel"
            hidden
          >
            <div className="closer flip rv">
              <div>
                <p className="eyebrow">02 / Attendance</p>
                <h2>A clearer daily register.</h2>
                <p className="lead">
                  Bring recording and reviewing attendance into a consistent workflow for
                  teachers and school administrators.
                </p>
              </div>
              <div className="result">
                <h4>Morning register</h4>
                <p className="meta">Primary 4 · Sample data</p>
                <div className="scroll">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Pupil</th>
                        <th scope="col" className="text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pupil 001</td>
                        <td className="text-right font-semibold text-brand">Present</td>
                      </tr>
                      <tr>
                        <td>Pupil 002</td>
                        <td className="text-right font-semibold text-brand">Present</td>
                      </tr>
                      <tr>
                        <td>Pupil 003</td>
                        <td className="text-right">Absent</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div
            className="panel"
            id="results"
            role="tabpanel"
            hidden
          >
            <div className="closer rv">
              <div>
                <p className="eyebrow">03 / Academics</p>
                <h2>Make results easier to manage.</h2>
                <p className="lead">
                  Organize assessment marks and examination results to support review and the
                  preparation of pupil report cards.
                </p>
              </div>
              <div className="result">
                <h4>Academic results</h4>
                <p className="meta">Primary 5 · End of Term II · Sample data</p>
                <div className="scroll">
                  <table>
                    <thead>
                      <tr>
                        <th scope="col">Pupil</th>
                        <th scope="col" className="text-right">ENG</th>
                        <th scope="col" className="text-right">MTC</th>
                        <th scope="col" className="text-right">SCI</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Pupil 001</td>
                        <td className="text-right">78</td>
                        <td className="text-right">84</td>
                        <td className="text-right">81</td>
                      </tr>
                      <tr>
                        <td>Pupil 002</td>
                        <td className="text-right">85</td>
                        <td className="text-right">76</td>
                        <td className="text-right">89</td>
                      </tr>
                      <tr>
                        <td>Pupil 003</td>
                        <td className="text-right">72</td>
                        <td className="text-right">80</td>
                        <td className="text-right">75</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* AI Assistant Panel */}
          <div
            className="panel"
            id="ai"
            role="tabpanel"
            hidden
          >
            <div className="closer flip rv">
              <div>
                <p className="eyebrow">04 / AI assistant</p>
                <h2>An assistant for teachers.</h2>
                <p className="lead">
                  Support everyday writing such as report card comments and lesson notes.
                  Teachers stay in charge and review every draft before it is used.
                </p>
              </div>
              <div className="result">
                <h4>AI assistant</h4>
                <p className="meta">Sample conversation · Sample data</p>
                <div className="chat">
                  <div className="msg you">
                    <small>Teacher</small>
                    Suggest a report card comment for Pupil 001 based on this term's marks.
                  </div>
                  <div className="msg ai">
                    <small>Assistant</small>
                    Pupil 001 has made steady progress this term, with strong results in
                    Mathematics (84) and Science (81). Continued reading practice will help
                    lift English further.
                  </div>
                </div>
                <p className="chat-note">
                  Drafts are suggestions for the teacher to review and edit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
       * Who it's for section (matches acs.md: .section > .wrap > .who)
       * ========================================================= */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Who it's for</p>
          <h2 style={{marginBottom: "32px"}}>Made for the whole school team.</h2>
          <div className="who">
            <div className="rv">
              <h3>Headteachers</h3>
              <p>See attendance and results across the school without chasing books and files.</p>
            </div>
            <div className="rv">
              <h3>Administrators</h3>
              <p>Keep pupil records organized and ready, term after term.</p>
            </div>
            <div className="rv">
              <h3>Teachers</h3>
              <p>Record the register, enter marks and prepare reports with less repeated writing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
       * Before/After comparison section (matches acs.md: .section > .wrap > .ba)
       * ========================================================= */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">The difference</p>
          <h2 style={{marginBottom: "32px"}}>From scattered to organized.</h2>
          <div className="ba">
            <div className="before rv">
              <h3>Without ACS</h3>
              <ul className="list">
                <li>Registers and marks in separate books</li>
                <li>Reports compiled by hand</li>
                <li>Hard to see the whole school at once</li>
              </ul>
            </div>
            <div className="after rv">
              <h3>With ACS</h3>
              <ul className="list">
                <li>One organized place for records, attendance and results</li>
                <li>Results ready to support report cards</li>
                <li>A clearer picture for the whole team</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
       * FAQ section (matches acs.md: .section > .wrap > .faq .rv .details)
       * ========================================================= */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Questions</p>
          <h2 style={{marginBottom: "28px"}}>Good things to ask.</h2>
          <div className="faq">
            <details>
              <summary>Does ACS work on phones?</summary>
              <p>
                ACS is being designed to work well on phones as well as computers. Ask the
                team what is available for your school today.
              </p>
            </details>
            <details>
              <summary>How is pupil information handled?</summary>
              <p>
                We ask that sensitive pupil information is not sent in first enquiries. How
                data is stored and who can see it is agreed with you during setup.
              </p>
            </details>
            <details>
              <summary>Do teachers need training?</summary>
              <p>
                Onboarding is part of getting started. Tell us about your team and we will
                discuss the support that fits.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* =========================================================
       * Closing CTA section (matches acs.md: .section.tint > .wrap > .cta .rv)
       * ========================================================= */}
      <section className="section tint">
        <div className="wrap">
          <div className="cta rv">
            <h2>A more organized school starts with a conversation.</h2>
            <a href="/contact" className="btn btn-primary">
              Request a walkthrough
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}